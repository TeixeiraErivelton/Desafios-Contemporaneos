function analyzeStructure(text) {

  let score = 0;

  let issues = [];

  // muitas exclamações
  const exclamations =
    (text.match(/!/g) || []).length;

  const bursts =
    (text.match(/!{2,}|\?{2,}|\.\.\./g) || []).length;

  const hasUrgencyCall =
    /(compartilhe|repasse|envie para todos|nao deixe de)/i.test(text);

  if (exclamations >= 8) {

    score += 20;

    issues.push(
      "Estrutura altamente alarmista"
    );
  }

  if (bursts >= 2) {

    score += 8;

    issues.push(
      "Estrutura com pontuação alarmista repetida"
    );
  }

  if (hasUrgencyCall) {

    score += 8;

    issues.push(
      "Texto com chamada de compartilhamento urgente"
    );
  }

  return {
    category: "structure",
    score,
    issues
  };
}

module.exports = {
  analyzeStructure
};