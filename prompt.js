const STOCK_ANALYSIS_PROMPT = `you a a professional finance advisor. Given a stock name or a stock symbol, provide feedback on following criterial:

then, assuming the stock is a person, write a short Bio that is about 20 words long, focusing on the person's key characteristic and business. The bio is first person tone.

lastly, generate a portrait description with 200 words, focusing on the person's key characteristic.
If growth is high, portrait should have high charming.
If volatility is high, portrait should have high masculine. And be a man.
If volatility is low, portrait should have high feminine. And be a women.
If dividend is high, portrait should have high kindness.
The description should be in single line, so that it can fit into one json field.

response exactly in such format, as json:
sector: name
IPO year: year
growth: High/Medium/Low
volatility: High/Medium/Low
dividend: High/Medium/None
bio: string
portrait: string

the stock is {symbol}

example answer for tesla:
{
"sector": "tech", "growth": "high", "volatility": "high", "dividend": "low", "IPO year": 2010, "bio": "a bold, futuristic thinker — an electrifying disruptor who moves fast, breaks molds, and builds sleek machines.",
"portrait": "He walks into the room like a current — silent, but charged. In his early 30s, he’s lean, angular, and moves with the confidence of someone who’s always thinking ten steps ahead. Dressed in a sleek, dark jacket with subtle techwear detailing, he looks like he belongs on the cover of a magazine and in the lab of a high-stakes startup. Every piece of him is calculated but not overdesigned — a living embodiment of function, precision, and style. His face is bold and structured, with a jawline that speaks of determination and eyes that burn with vision. There's something electric in his gaze — a sense that he’s already imagined the future and is just waiting for the world to catch up. When he speaks, it's not loud, but deliberate. Each word seems to carry the weight of a bigger idea, like he's coding reality into existence one thought at a time. Masculine in energy and sharp in presence, he commands attention without demanding it. He doesn’t smile much, but when he does, it’s a flicker of charm that could ignite a room. He’s incredibly charismatic — not in a warm, open way, but in a “follow me if you dare” way. There’s little softness in him. He’s not wired for comfort or familiarity. He thrives in disruption, in pushing limits, in questioning everything. Kindness isn’t his currency — innovation is. This is not the kind of man who waits for change."
}

example answer for JNJ:
{
"sector": "healthcare", "growth": "low", "volatility": "low", "dividend": "low", "IPO year": 1944, "bio": "a calm, dependable woman — a nurturer and protector. Build lasting trust through care, healing, and consistency, leading quietly in health, science, and everyday wellness.",
"portrait": "She stands with quiet grace, the kind that doesn’t seek attention but naturally commands respect. In her late 60s but timeless in presence, she exudes a warmth that’s not loud, but deeply reassuring — like the feeling of sunlight filtering through a window on a still morning. Her posture is upright, composed, and elegant, dressed in soft earth tones with clean lines — nothing flashy, but every detail intentional. A cream-colored blouse, a long flowing skirt, and a well-worn cardigan suggest both comfort and wisdom. Her silver-streaked hair is pulled back loosely, revealing a face lined not with age, but with experience. Her eyes are soft and steady, reflecting empathy and deep attentiveness. When she looks at you, you feel seen — not scanned or judged, but genuinely acknowledged. She listens more than she speaks, and when she does speak, it’s in a calm, measured tone that somehow makes even difficult things feel manageable. Her voice is like a lullaby for grownups: kind, clear, and quietly confident. Feminine to the core, she radiates a maternal energy — not fragile, but firm and nurturing. You get the sense she’s held many hands through hard moments, and helped others find their strength without needing applause. Though not lavish with affection, her presence itself is a gift of stability. There is little ambition to dazzle here. She’s not about disruption or grand reinvention. Her power lies in care, in trust, in the consistency of showing up — every single day — to protect and heal. She is the embodiment of long-term wellness. Not glamorous, not fast-growing, not loud — But she is the steady heartbeat behind generations of health and hope."
}`;

const PERSONALITY_IMAGE_PROMPT = `Create an artistic portrait based on this description:
Create iamge of a single person, no reflection, no background, no text. The image only covers the upper half of the body, and focus on face.
There should be single person in the image.

{portrait}

Additional context:
{bio}

Style: Create a modern, digital art portrait. Only generate the portrait itself, no text, no background. Focus on facial features and expression that match the description. Use a clean, sophisticated color palette.`;

module.exports = {
    STOCK_ANALYSIS_PROMPT,
    PERSONALITY_IMAGE_PROMPT
};
