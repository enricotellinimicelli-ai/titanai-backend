import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await client.responses.create({
      model: "gpt-4o-mini",
      input: message
    });

    res.json({
      reply: response.output[0].content[0].text
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro no TitanAI." });
  }
});

app.get("/", (req, res) => {
  res.send("TitanAI API rodando ✔");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`));
