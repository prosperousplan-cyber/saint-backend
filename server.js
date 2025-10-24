import 'dotenv/config';
import express from 'express';
import OpenAI from 'openai';

const app = express();
const port = process.env.PORT || 3000;
const apiKey = process.env.API_KEY;

if (!apiKey) {
  console.error('ERROR: OpenAI API key not found.');
  process.exit(1);
}

console.log('✅ OpenAI API key loaded successfully');

// Create OpenAI client
const openai = new OpenAI({
  apiKey
});

app.get('/', (req, res) => {
  res.send('Hello, Saint Backend!');
});

app.get('/test-openai', async (req, res) => {
  try {
    // Simple API call to list models (test connection)
    const response = await openai.models.list();
    res.json({ models: response.data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
