const initialStocks = [
    {
        date: '04-12-2025',
        stock: 'TSLA',
        name: 'Tesla Inc.',
        portrait_url: '/images/tesla.png',
        news_url: 'https://www.cnn.com/2025/04/12/business/tesla-china-tariffs-musk/index.html',
        price_change: -8.45,
        news_brief: 'Taking a step back from the spotlight in China — no more new Model S or X orders for now. 💼📦 The trade war drama just got real: tariffs up, costs up, and frankly… it’s not worth the ride (for now). S & X may be premium, but even legends need to know when to pause. Meanwhile, my Shanghai-built siblings (Model 3 + Y) are still cruising. 🚗✨ Stay tuned — I’m not out, just switching lanes. #Tesla #TradeTensions #ModelS #ModelX #MadeInUSA #PausedNotParked',
        news_image_description: 'Tesla Model Y in vibrant red color',
        image_url: '/images/tesla_0412.png'
    },
    {
        date: '04-11-2025',
        stock: 'TSLA',
        name: 'Tesla Inc.',
        portrait_url: '/images/tesla.png',
        news_url: 'https://www.reuters.com/business/autos-transportation/ev-maker-polestar-bids-lure-disgruntled-tesla-owners-with-discounts-2025-04-10/',
        price_change: 20.12,
        news_brief: "Polestar’s dangling $20K like it’s love — cute. 🥱 I see you, discount hunters. I’ve been through trade wars, tweet storms, and more headlines than any EV on the road. Still, I move markets. Still, I define the category. So if you're jumping ship for a rebate and a shiny new badge, just remember: legends don’t chase, they accelerate ahead. 😉 No hard feelings… just don’t look back when I upgrade. #TeslaLife #NotForTheFainthearted #PolestarWho #StillTheStandard",
        news_image_description: 'Tesla Model Y in vibrant red color',
        image_url: '/images/tesla_0411.png'
    },
    {
        date: '04-10-2025',
        stock: 'TSLA',
        name: 'Tesla Inc.',
        portrait_url: '/images/tesla.png',
        news_url: 'https://www.reuters.com/business/autos-transportation/saudi-debut-tesla-faces-desert-heat-few-chargers-no-musk-protests-2025-04-09/',
        price_change: -8.97,
        news_brief: "Just touched down in Saudi Arabia — yeah, late to the party, but I brought the heat (and not just from the sun). No protests, no noise, just me, rolling into Riyadh with a point to prove. BYD got a head start? Cute. But I’m not here for second place. 🔋True, charging stations are scarce and the highway’s long, but watch how fast I adapt. I’ve mended fences, flipped narratives, and now I’m here to electrify Vision 2030. This isn’t just a debut — it’s a comeback. #TeslaInTheDesert #SaudiLaunch #StillChargingAhead #Vision2030",
        news_image_description: 'Tesla Model Y in vibrant red color',
        image_url: '/images/tesla_0410.png'
    },

    {
        date: '04-12-2025',
        stock: 'GOOGL',
        name: 'Alphabet Inc.',
        portrait_url: '/images/google.png',
        news_url: 'https://www.reuters.com/technology/google-lays-off-hundreds-employees-android-pixel-group-information-reports-2025-04-11/',
        price_change: -4.07,
        news_brief: "Yes, I let go of hundreds from Android, Pixel, and Chrome. Tough calls, but evolution isn’t painless. Since merging Platforms & Devices, I’ve been getting leaner, faster, sharper. While some see cuts, I see focus — AI, cloud, and the future are where I’m sprinting now. It’s not a glitch, it’s a reboot. 💡 To those leaving: thank you. To the rest: buckle up. We’re not downsizing dreams — we’re upgrading priorities. #GoogleShift #BuiltForTomorrow #PixelToPowerplay #AIOverEverything",
        news_image_description: 'Tesla Model Y in vibrant red color',
        image_url: '/images/google_0412.png'
    },
    {
        date: '04-11-2025',
        stock: 'GOOGL',
        name: 'Alphabet Inc.',
        portrait_url: '/images/google.png',
        news_url: 'https://www.sfgate.com/local/article/google-abandons-even-more-office-space-bay-area-20269763.php',
        price_change: 11.23,
        news_brief: "Just listed another 400,000 sq ft in Redwood City — Pacific Shores, you’ve been a vibe, but it’s time. 🏊‍♂️🏀 Health clubs, pools, sports fields… great perks, but I’m not in the real estate game anymore. I’m streamlining, scaling AI, and building smarter, not bigger. From Mountain View to SF to the Shores — this isn’t a retreat, it’s a refocus. 🧠💻 Watch me turn square footage into innovation. #GoogleRealign #BayAreaMoves #LessSpaceMoreVision #AIIsTheOfficeNow",
        news_image_description: 'Tesla Model Y in vibrant red color',
        image_url: '/images/google_0411.png'
    },
    {
        date: '04-11-2025',
        stock: 'GOOGL',
        name: 'Alphabet Inc.',
        portrait_url: '/images/google.png',
        news_url: 'https://blog.google/products/google-cloud/google-cloud-next-2025-sundar-pichai-keynote/#gemini-2-5-flash',
        price_change: -3.97,
        news_brief: "Just dropped Gemini 2.5, the smartest model in the game — and yeah, it topped Humanity’s Last Exam. 💯 Also meet Ironwood, my most powerful TPU ever, and say hi to Gemini 2.5 Flash — lightning-fast brains on a budget.⚡️ From quantum breakthroughs to a global Cloud WAN built for enterprise dominance, I’m not just talking AI — I am AI. Whether you're building, scaling, or dreaming — I’ve got the stack, speed, and science to back it up. #GoogleNext25 #Gemini25 #IronwoodTPU #AIStackKing #ThinkFasterBuildSmarter",
        news_image_description: 'Tesla Model Y in vibrant red color',
        image_url: '/images/google_0410.png'
    },
    {
        date: '04-12-2025',
        stock: 'PG',
        name: 'Procter & Gamble',
        portrait_url: '/images/pg.png',
        news_url: 'https://www.theregister.com/2025/04/08/procter_gamble_finds_ai_improves_teamwork/',
        price_change: 0.39,
        news_brief: "Just wrapped a study with some of the brainiest brains from Harvard, Wharton, and ESSEC — turns out, AI isn’t just smart, it’s a vibe. 💡Whether we’re rethinking Pringles crunch, giving Old Spice a fiery twist, or making Gillette precision sharper than ever, generative AI is our newest teammate. It fills in knowledge gaps, sparks fresh ideas, and yes… even makes solo work feel a little less lonely. This isn’t just innovation — it’s innovation on turbo mode. #PoweredByAI #PGNextGen #SmartChipsSmoothShaves #CyberneticTeammates",
        news_image_description: 'Tesla Model Y in vibrant red color',
        image_url: '/images/pg_0412.png'
    },
    {
        date: '04-11-2025',
        stock: 'PG',
        name: 'Procter & Gamble',
        portrait_url: '/images/pg.png',
        news_url: 'https://us.pg.com/blogs/multi-generational-pg-families/',
        price_change: 3.50,
        news_brief: "Meet the Starks — five P&Gers, one legendary legacy. From NFL plays to product breakthroughs, this family turned competitive drive into consumer impact. 💥 Kevin traded football fields for store shelves and helped shape Pampers and Tide. Lee found purpose and came back because P&G felt like home. Their kids? Each bringing new energy — Alex proving authenticity wins, and Jordan earning a CEO Award for making Downy smell like success. This isn’t just a workplace — it’s a generational playground for passion, purpose, and a whole lot of Procter pride. #PGFamilyLegacy #FromFieldToFabric #GenerationsOfImpact #StarksAtP&G",
        news_image_description: 'Teslaaa Model Y in vibrant red color',
        image_url: '/images/pg_0411.png'
    }
];

async function seedDatabase(db) {
    try {
        // Always clear the database first
        console.log('Clearing database...');
        await db('stocks').del();
        
        // Then seed with initial data
        console.log('Seeding initial stock data...');
        await db('stocks').insert(initialStocks);
        console.log('Seed completed successfully');
    } catch (error) {
        console.error('Error seeding database:', error);
        throw error;
    }
}

module.exports = {
    seedDatabase
};
