import React, { useState } from 'react';
import Input from '../../atoms/Input/Input';
import Select from '../../atoms/Select/Select';
import ResultadoCard from '../../molecules/ResultadoCard/ResultadoCard';
import { CalculateAverage } from '../../../usecases/CalculateAverage';
import { getAverageRules } from '../../../domain/AverageRules';

const calculator = new CalculateAverage();

function CalculadoraForm() {
  const [stageCount, setStageCount] = useState(2);
  const [grades, setGrades] = useState({ E1: '', E2: '', E3: '', E4: '' });

  const handleInputChange = (stage, value) => {
    setGrades((prev) => ({ ...prev, [stage]: value }));
  };

  const handleStageChange = (e) => {
    const newStageCount = Number(e.target.value);
    setStageCount(newStageCount);
    setGrades({ E1: '', E2: '', E3: '', E4: '' });
  };

  const regrasAtuais = getAverageRules(stageCount);

  let media = null;
  let erro = null;

  try {
    media = calculator.execute(grades, stageCount);
  } catch (err) {
    if (err.message.includes('obrigatória')) {
      media = null;
    } else {
      erro = err.message;
    }
  }

  const estaAprovado = media !== null && media >= 60;

  const opcoesTipo = [
    { value: 2, label: 'Semestral (2 Etapas)' },
    { value: 4, label: 'Anual (4 Etapas)' },
  ];

  return (
    <div className="w-full max-w-[400px] bg-[#f8f9fa] p-[25px] rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] mx-auto">
      <h2 className="text-center text-[#333] mt-0 mb-[20px] text-xl font-bold">
        Calculadora IFRN
      </h2>

      <div className="flex flex-col gap-[6px] mb-[20px] font-medium text-gray-700">
        <label>Tipo de Disciplina:</label>
        <Select
          value={stageCount}
          onChange={handleStageChange}
          options={opcoesTipo}
        />
      </div>

      <div className="flex flex-col gap-[12px]">
        {regrasAtuais.map((rule) => (
          <Input
            key={rule.stage}
            type="number"
            placeholder={`Nota ${rule.stage} (Peso ${rule.weight})`}
            value={grades[rule.stage]}
            onChange={(e) => handleInputChange(rule.stage, e.target.value)}
          />
        ))}
      </div>

      <ResultadoCard media={media} erro={erro} estaAprovado={estaAprovado} />
    </div>
  );
}

export default CalculadoraForm;