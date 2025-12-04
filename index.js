
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;
  const reply = `TitanAI diz: Você disse "${message}"`;
  res.json({ reply });
});

app.get("/", (req, res) => {
  res.send("TitanAI Online!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Rodando na porta " + PORT);
});
