function analyzeEmotional(text) {

  let score = 0;

  let issues = [];

  const normalized = text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();

  const emotionalPatterns = [
    "😱",
    "🚨",
    "⚠",
    "PERIGO",
    "ESCONDENDO",
    "BILHOES",
    "REVOLTANTE",
    "INDIGNACAO",
    "ABSURDO"
  ];

  emotionalPatterns.forEach(pattern => {

    if (normalized.includes(pattern)) {

      score += 5;

      issues.push(
        `Apelo emocional detectado: "${pattern}"`
      );
    }
  });

  return {
    category: "emotional",
    score,
    issues
  };
}

module.exports = {
  analyzeEmotional
};