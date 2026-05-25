const {
  normalizeText
} = require("../utils/normalizeText");

const {
  analyzeSensationalism
} = require("../rules/sensationalism");

const {
  analyzePunctuation
} = require("../rules/punctuation");

const {
  analyzeUppercase
} = require("../rules/uppercase");

const {
  analyzeLinks
} = require("../rules/links");

const {
  analyzeRepetition
} = require("../rules/repetition");

const {
  analyzeEmotional
} = require("../rules/emotional");

const {
  analyzeStructure
} = require("../rules/structure");

function analyzeText(text) {

  // texto normalizado
  const normalizedText =
    normalizeText(text);

  const results = [

    analyzeSensationalism(normalizedText),

    analyzePunctuation(normalizedText),

    // IMPORTANTE:
    // usa texto ORIGINAL
    analyzeUppercase(text),

    analyzeLinks(text),

    analyzeRepetition(normalizedText),

    analyzeEmotional(text),

    analyzeStructure(text)
  ];

  let finalScore = 0;

  let issues = [];

  let scores = {};

  results.forEach(result => {

    const safeScore = Math.max(0, Math.min(result.score || 0, 30));

    finalScore += safeScore;

    scores[result.category] =
      safeScore;

    issues.push(...result.issues);
  });

  finalScore = Math.min(finalScore, 100);

  let classification = "";

  let riskLevel = "";

  if (finalScore < 30) {

    classification = "Confiável";

    riskLevel = "Baixo";

  } else if (finalScore < 60) {

    classification = "Suspeito";

    riskLevel = "Médio";

  } else {

    classification =
      "Alto risco de fake news";

    riskLevel = "Alto";
  }

  let explanation =
    "O texto apresenta poucos indícios de desinformação.";

  if (finalScore >= 30) {

    explanation =
      "O texto apresenta padrões comuns em conteúdos potencialmente desinformativos.";
  }

  if (finalScore >= 60) {

    explanation =
      "O texto apresenta forte linguagem sensacionalista e múltiplos indícios associados a fake news.";
  }

  return {

    finalScore,

    confidence: `${finalScore}%`,

    classification,

    riskLevel,

    explanation,

    scores,

    issues
  };
}

module.exports = {
  analyzeText
};