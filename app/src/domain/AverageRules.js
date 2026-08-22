export const AVERAGE_RULES = {
  2: [
    { stage: "E1", weight: 2 },
    { stage: "E2", weight: 3 },
  ],

  4: [
    { stage: "E1", weight: 2 },
    { stage: "E2", weight: 2 },
    { stage: "E3", weight: 3 },
    { stage: "E4", weight: 3 },
  ],
};

export function getAverageRules(stageCount) {
  const rules = AVERAGE_RULES[stageCount];

  if (!rules) {
    throw new Error(
      "A disciplina deve possuir 2 ou 4 etapas."
    );
  }

  return rules;
}

export function getTotalWeight(stageCount) {
  return getAverageRules(stageCount).reduce(
    (total, { weight }) => total + weight,
    0
  );
}