async function analyzeStock() {
    const stockSymbol = document.getElementById('stockSymbol').value.trim().toUpperCase();
    if (!stockSymbol) {
        alert('Please enter a stock symbol');
        return;
    }

    const loadingDiv = document.getElementById('loading');
    const stockView = document.getElementById('stockView');
    const personalityView = document.getElementById('personalityView');
    const imageLoading = document.getElementById('imageLoading');
    const imageContainer = document.getElementById('imageContainer');

    try {
        loadingDiv.classList.remove('hidden');
        stockView.classList.add('hidden');
        personalityView.classList.add('hidden');
        imageLoading.classList.add('hidden');
        imageContainer.classList.add('hidden');

        const response = await fetch('/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ symbol: stockSymbol })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        
        if (data.success && data.data) {
            // Update the stock view
            const updateElementText = (id, value) => {
                const element = document.getElementById(id);
                if (element) element.textContent = value || 'N/A';
            };

            updateElementText('sector', data.data.sector);
            updateElementText('ipo', data.data['IPO year']);
            updateElementText('growth', data.data.growth);
            updateElementText('volatility', data.data.volatility);
            updateElementText('dividend', data.data.dividend);

            // Prepare personality data
            const personalityTraits = {
                bio: data.data.bio || 'No bio available',
                portrait: data.data.portrait || 'No portrait description available'
            };

            // Update personality view fields if they exist
            updateElementText('bio', data.data.bio);
            updateElementText('career', data.data.sector);
            updateElementText('age', calculateAge(data.data['IPO year']));
            updateElementText('charming', mapGrowthToCharm(data.data.growth));
            updateElementText('masculine', mapVolatilityToMasculinity(data.data.volatility));
            updateElementText('kindness', mapDividendToKindness(data.data.dividend));

            // Show stock view first
            stockView.classList.remove('hidden');
            
            // Start transformation after delay
            setTimeout(() => {
                stockView.classList.add('scramble-animation');
                
                // Switch views at animation midpoint
                setTimeout(() => {
                    stockView.classList.add('hidden');
                    stockView.classList.remove('scramble-animation');
                    personalityView.classList.remove('hidden');
                    
                    // Show image loading indicator
                    imageLoading.classList.remove('hidden');
                    
                    // Generate image in the background
                    generatePortraitImage(personalityTraits);
                }, 1000);
            }, 3000);

        } else {
            throw new Error('Invalid response format');
        }
    } catch (error) {
        stockView.innerHTML = `
            <div class="text-red-600">
                Error: ${error.message}
            </div>
        `;
        stockView.classList.remove('hidden');
    } finally {
        loadingDiv.classList.add('hidden');
    }
}

// Function to generate portrait image
async function generatePortraitImage(traits) {
    try {
        const imageResponse = await fetch('/generate-image', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ traits })
        });

        if (!imageResponse.ok) {
            throw new Error('Failed to generate image');
        }

        const imageData = await imageResponse.json();
        if (imageData.success && imageData.imageUrl) {
            const generatedImage = document.getElementById('generatedImage');
            if (generatedImage) {
                generatedImage.src = imageData.imageUrl;
                document.getElementById('imageLoading').classList.add('hidden');
                document.getElementById('imageContainer').classList.remove('hidden');
            }
        }
    } catch (error) {
        console.error('Error generating image:', error);
        const imageLoading = document.getElementById('imageLoading');
        if (imageLoading) {
            imageLoading.innerHTML = `<p class="text-red-500">Failed to generate image: ${error.message}</p>`;
        }
    }
}

// Helper functions for mapping values
function calculateAge(ipoYear) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - ipoYear;
    if (age < 20) return 'Young';
    if (age < 40) return 'Middle-aged';
    if (age < 60) return 'Mature';
    return 'Elder';
}

function mapGrowthToCharm(growth) {
    const map = {
        'high': 'Very Charming',
        'medium': 'Pleasant',
        'low': 'Reserved'
    };
    return map[growth.toLowerCase()] || 'Unknown';
}

function mapVolatilityToMasculinity(volatility) {
    const map = {
        'high': 'Strong',
        'medium': 'Balanced',
        'low': 'Feminine'
    };
    return map[volatility.toLowerCase()] || 'Unknown';
}

function mapDividendToKindness(dividend) {
    const map = {
        'high': 'Very Generous',
        'medium': 'Caring',
        'low': 'Self-focused',
        'none': 'Independent'
    };
    return map[dividend.toLowerCase()] || 'Unknown';
}
