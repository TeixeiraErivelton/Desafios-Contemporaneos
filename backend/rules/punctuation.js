function analyzePunctuation(text) {

  let score = 0;

  let issues = [];

  const exclamations =
    (text.match(/!/g) || []).length;

  const questions =
    (text.match(/\?/g) || []).length;

  if (exclamations >= 3) {

    score += 10;

    issues.push(
      "Uso excessivo de exclamações"
    );
  }

  if (questions >= 4) {

    score += 5;

    issues.push(
      "Uso excessivo de interrogações"
    );
  }

  return {
    category: "punctuation",
    score,
    issues
  };
}

module.exports = {
  analyzePunctuation
};