import React from 'react';


function ResultadoCard({ media, erro }) { 
  

  const estaAprovado = media !== null && media >= 60;

  if (erro) {
    return (
      <div className="mt-5 p-[15px] border border-[#f8d7da] rounded-lg bg-[#f8d7da] text-center">
        <p className="text-[#721c24] m-0 font-medium">{erro}</p>
      </div>
    );
  }

  if (!media) {
    return (
      <div className="mt-5 p-[15px] border border-[#e9ecef] rounded-lg bg-white text-center">
        <p className="text-[#6c757d] m-0">Preencha todas as notas para ver o resultado.</p>
      </div>
    );
  }

  return (
    <div className="mt-5 p-[15px] border border-[#e9ecef] rounded-lg bg-white text-center">
      <h3 className="text-lg font-bold mb-2">Média Final: {media.toFixed(1)}</h3>
      
      <p className={estaAprovado ? 'text-[#2e7d32] font-bold m-0' : 'text-[#d32f2f] font-bold m-0'}>
        {estaAprovado ? 'Aprovado !!!!' : 'Abaixo da Média (Mínimo: 60)'}
      </p>
    </div>
  );
}

export default ResultadoCard;