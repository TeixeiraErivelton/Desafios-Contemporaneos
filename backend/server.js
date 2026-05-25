const express = require("express");
const cors = require("cors");

const {
  analyzeText
} = require("./services/analyzerService");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/analyze", (req, res) => {
  try {
    const { text } = req.body;

    if (!text || text.trim() === "") {
      return res.status(400).json({
        error: "Texto é obrigatório"
      });
    }

    const result = analyzeText(text);

    res.json(result);

  } catch (error) {
    res.status(500).json({
      error: "Erro ao analisar texto"
    });
  }
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});