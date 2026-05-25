function analyzeRepetition(text) {

  let score = 0;

  let issues = [];

  const normalized = text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  const words = normalized.match(/[a-z]{3,}/g) || [];

  const stopWords = new Set([
    "que",
    "para",
    "com",
    "por",
    "uma",
    "das",
    "dos",
    "esse",
    "essa",
    "isso",
    "mais",
    "como"
  ]);

  const count = {};

  words.forEach(word => {

    if (!stopWords.has(word)) {
      count[word] = (count[word] || 0) + 1;
    }
  });

  for (const word in count) {

    if (
      count[word] >= 4 &&
      word.length > 4
    ) {

      score += 10;

      issues.push(
        `Repetição excessiva: "${word}"`
      );

      break;
    }
  }

  return {
    category: "repetition",
    score,
    issues
  };
}

module.exports = {
  analyzeRepetition
};