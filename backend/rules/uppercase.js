function analyzeUppercase(text) {

  let score = 0;

  let issues = [];

  const letters =
    text.match(/[A-Za-zÀ-ÖØ-öø-ÿ]/g) || [];

  const upperCaseLetters =
    (text.match(/[A-ZÀ-ÖØ-Þ]/g) || []).length;

  const ratio =
    letters.length === 0
      ? 0
      : upperCaseLetters / letters.length;

  if (letters.length >= 20 && ratio >= 0.55) {

    score += 15;

    issues.push(
      "Uso excessivo de letras maiúsculas"
    );
  }

  return {
    category: "uppercase",
    score,
    issues
  };
}

module.exports = {
  analyzeUppercase
};