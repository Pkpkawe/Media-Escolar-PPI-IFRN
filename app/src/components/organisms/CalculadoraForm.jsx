import React, { useState, useEffect } from 'react';
import Input from '../atoms/Input';
import Select from '../atoms/Select';
import ResultadoCard from '../molecules/ResultadoCard';
import { CalculateAverage } from '../../usecases/CalculateAverage';
import { getAverageRules } from '../../domain/AverageRules';

const calculator = new CalculateAverage();

function CalculadoraForm() {
  const [stageCount, setStageCount] = useState(2);
  const [grades, setGrades] = useState({ E1: '', E2: '', E3: '', E4: '' });
  
  // Usando estados para controlar regras, média e erro
  const [regrasAtuais, setRegrasAtuais] = useState(getAverageRules(2));
  const [media, setMedia] = useState(null);
  const [erro, setErro] = useState(null);

  const handleInputChange = (stage, value) => {
    setGrades((prev) => ({ ...prev, [stage]: value }));
  };

  const handleStageChange = (e) => {
    const newStageCount = Number(e.target.value);
    setStageCount(newStageCount);
    // Limpa as notas ao trocar o tipo de disciplina
    setGrades({ E1: '', E2: '', E3: '', E4: '' });
  };

  // useEffect "vigia" grades e stageCount. Se algum deles mudar, roda essa função:
  useEffect(() => {
    // 1. Atualiza as regras
    setRegrasAtuais(getAverageRules(stageCount));

    // 2. Tenta calcular a média
    try {
      const calculatedMedia = calculator.execute(grades, stageCount);
      setMedia(calculatedMedia);
      setErro(null); // Limpa o erro se o cálculo deu certo
    } catch (err) {
      if (err.message.includes('obrigatória')) {
        setMedia(null);
        setErro(null); // Esconde o erro enquanto o usuário ainda está preenchendo
      } else {
        setErro(err.message);
        setMedia(null);
      }
    }
  }, [grades, stageCount]); // Array de dependências

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

      {/* Removido o estaAprovado. O componente ResultadoCard resolve isso internamente agora! */}
      <ResultadoCard media={media} erro={erro} />
    </div>
  );
}

export default CalculadoraForm;