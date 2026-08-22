import React from 'react';

function Input({ type = 'number', placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-[10px] text-[15px] border border-[#ced4da] rounded-md focus:outline-none focus:border-[#2e7d32]"
    />
  );
}

export default Input;