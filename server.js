const express = require('express');
const OpenAI = require('openai');
const config = require('./config.json');
const { STOCK_ANALYSIS_PROMPT, PERSONALITY_IMAGE_PROMPT } = require('./prompt');
const { StockModel, db } = require('./db');
const { seedDatabase } = require('./seeds/initial_stocks');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use('/images', express.static(path.join(__dirname, 'images')));

// Initialize OpenAI client
const openai = new OpenAI({
    apiKey: config.OPENAI_API_KEY
});

// Initialize database with seed data
(async () => {
    try {
        await seedDatabase(db);
    } catch (error) {
        console.error('Failed to seed database:', error);
    }
})();

app.post('/analyze', async (req, res) => {
    try {
        const { symbol } = req.body;
        if (!symbol) {
            return res.status(400).json({ error: 'Stock symbol is required' });
        }

        const prompt = STOCK_ANALYSIS_PROMPT.replace('{symbol}', symbol);
        
        const response = await openai.responses.create({
            model: "gpt-4o",
            input: [
                {
                    "role": "system",
                    "content": [
                        {
                            "type": "input_text",
                            "text": prompt
                        }
                    ]
                }
            ],
            text: {
                "format": {
                  "type": "text",
                }
            },
            reasoning: {},
            tools: [
                {
                    type: "web_search_preview",
                    user_location: {
                        type: "approximate",
                        country: "US"
                    },
                    search_context_size: "medium"
                }
            ],
            temperature: 1,
            max_output_tokens: 2048,
            top_p: 1,
            store: true
        });

        // Parse the response
        try {
            const jsonStr = response.output_text;
            // Try to extract JSON using regex first
            const jsonMatch = jsonStr.match(/\{[\s\S]*\}/);
            if (!jsonMatch) {
                throw new Error('No JSON found in response');
            }
            const data = JSON.parse(jsonMatch[0]);
            return res.json({ success: true, data });
        } catch (e) {
            console.error('Failed to parse JSON:', response.output_text);
            return res.status(500).json({ error: 'Failed to parse response' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to analyze stock' });
    }
});

app.post('/generate-image', async (req, res) => {
    try {
        const { traits } = req.body;
        if (!traits) {
            return res.status(400).json({ error: 'Personality traits are required' });
        }

        // Replace placeholders in the prompt
        const prompt = PERSONALITY_IMAGE_PROMPT
            .replace('{bio}', traits.bio)
            .replace('{portrait}', traits.portrait);

        console.log('Image generation prompt:', prompt); // For debugging

        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: prompt,
            n: 1,
            size: "1024x1024",
            quality: "standard",
            style: "natural"
        });

        return res.json({
            success: true,
            imageUrl: response.data[0].url
        });
    } catch (error) {
        console.error('Error generating image:', error);
        res.status(500).json({ error: 'Failed to generate image' });
    }
});

// Get discovery feed
app.get('/api/discovery', async (req, res) => {
    try {
        const stocks = await StockModel.getAll();
        const feed = stocks.map(stock => ({
            id: stock.id,
            username: stock.stock,
            userAvatar: stock.portrait_url,
            image: stock.image_url,
            caption: stock.news_brief,
            likes: Math.floor(Math.random() * 1000), // Placeholder likes count
            date: stock.date,
            priceChange: stock.price_change,
            sector: stock.name,
            newsUrl: stock.news_url // Add the news URL
        }));

        res.json({
            success: true,
            data: feed
        });
    } catch (error) {
        console.error('Error loading discovery feed:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
