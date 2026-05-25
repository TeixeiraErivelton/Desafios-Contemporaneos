function analyzeLinks(text) {

  let score = 0;

  let issues = [];

  const links =
    text.match(/(https?:\/\/\S+|www\.\S+|\b[a-z0-9-]+\.(ly|gl|gd|com)\/\S+)/gi) || [];

  const shortenerRegex =
    /(bit\.ly|tinyurl\.com|goo\.gl|t\.co|is\.gd|cutt\.ly|rebrand\.ly)/i;

  const hasShortener =
    links.some(link => shortenerRegex.test(link));

  if (hasShortener) {

    score += 15;

    issues.push(
      "Link encurtado detectado (pode ocultar a origem)"
    );
  }

  if (links.length >= 3) {

    score += 5;

    issues.push(
      "Muitos links no mesmo texto"
    );
  }

  return {
    category: "links",
    score,
    issues
  };
}

module.exports = {
  analyzeLinks
};