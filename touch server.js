import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/explain", async (req, res) => {
  const { prompt, structure } = req.body;

  const messages = [
    {
      role: "system",
      content: "You are a helpful explainer who breaks ideas into structured, rhetorical parts.",
    },
    {
      role: "user",
      content: `Topic: ${prompt}\n\nStructure:\n${structure}\n\nExplain this topic using the structure above.`,
    },
  ];

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
    });

    res.json({ output: completion.choices[0].message.content.trim() });
  } catch (err) {
    console.error("GPT error:", err);
    res.status(500).json({ error: "GPT failed." });
  }
});

app.listen(5000, () => console.log("🔥 Server running on http://localhost:5000"));
