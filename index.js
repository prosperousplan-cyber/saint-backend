const express = require('express');
const { OpenAI } = require('openai');
const app = express();
const port = process.env.PORT || 3000;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.get('/', async (req, res) => {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: 'Hello!' }]
  });
  res.send(completion.choices[0].message.content);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
