import React from 'react';

function Select({ value, onChange, options }) {
  return (
    <select 
      value={value} 
      onChange={onChange} 
      className="w-full p-[10px] text-[15px] border border-[#ced4da] rounded-md bg-white focus:outline-none focus:border-[#2e7d32]"
    >

      {options.map((opt, index) => (
        <option key={`select-opt-${index}`} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

export default Select;