# Stock Analysis AI Web App

A simple web application that provides AI-powered stock analysis using OpenAI's API.

## Prerequisites

1. Node.js and npm installed on your system
2. OpenAI API key

## Setup

1. Install Node.js from https://nodejs.org/

2. Install dependencies:
```bash
npm install
```

3. Set up your OpenAI API key:
```bash
export OPENAI_API_KEY='your-api-key-here'
```

4. Start the server:
```bash
npm start
```

5. Open your browser and visit: http://localhost:3000

## Usage

1. Enter a stock symbol (e.g., AAPL, GOOGL) in the input box
2. Click "Analyze Stock"
3. Wait for the AI-powered analysis to appear

## Files Structure

- `index.html` - Main webpage
- `app.js` - Frontend JavaScript
- `server.js` - Express server and OpenAI integration
- `prompt.js` - OpenAI prompt template
- `package.json` - Project dependencies
