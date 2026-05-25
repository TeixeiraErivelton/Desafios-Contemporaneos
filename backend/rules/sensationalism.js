const suspiciousPatterns = [

  {
    text: "URGENTE",
    weight: 10
  },

  {
    text: "COMPARTILHE",
    weight: 10
  },

  {
    text: "CHOCANTE",
    weight: 10
  },

  {
    text: "SEGREDO",
    weight: 10
  },

  {
    text: "ATENCAO",
    weight: 8
  },

  {
    text: "NAO QUEREM QUE VOCE SAIBA",
    weight: 20
  },

  {
    text: "ANTES QUE APAGUEM",
    weight: 20
  },

  {
    text: "100% GARANTIDO",
    weight: 15
  },

  {
    text: "EXCLUSIVO",
    weight: 10
  },

  {
    text: "VERDADE ESCONDIDA",
    weight: 20
  }
];

function analyzeSensationalism(text) {

  let score = 0;

  let issues = [];

  suspiciousPatterns.forEach(pattern => {

    if (text.includes(pattern.text)) {

      score += pattern.weight;

      issues.push(
        `Padrão sensacionalista detectado: "${pattern.text}"`
      );
    }
  });

  // bônus por excesso de padrões
  const detected =
    issues.length;

  if (detected >= 4) {

    score += 15;

    issues.push(
      "Múltiplos padrões sensacionalistas detectados"
    );
  }

  return {
    category: "sensationalism",
    score,
    issues
  };
}

module.exports = {
  analyzeSensationalism
};