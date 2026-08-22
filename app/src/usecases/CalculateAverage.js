import { getAverageRules, getTotalWeight } from "../domain/AverageRules.js";

export class CalculateAverage {
  execute(grades, stageCount) {
    if (!grades || typeof grades !== "object" || Array.isArray(grades)) {
      throw new Error("As notas devem ser informadas.");
    }

    const rules = getAverageRules(stageCount);

    const weightedTotal = rules.reduce((total, rule) => {
      const grade = grades[rule.stage];

      if (grade === undefined || grade === null || grade === "") {
        throw new Error(`A nota da etapa ${rule.stage} é obrigatória.`);
      }

      const numericGrade = Number(grade);

      if (Number.isNaN(numericGrade)) {
        throw new Error(`A nota da etapa ${rule.stage} deve ser um número.`);
      }

      if (numericGrade < 0 || numericGrade > 100) {
        throw new Error(
          `A nota da etapa ${rule.stage} deve estar entre 0 e 100.`
        );
      }

      return total + numericGrade * rule.weight;
    }, 0);

    const totalWeight = getTotalWeight(stageCount);

    return weightedTotal / totalWeight;
  }
}