import React from 'react';

function Input({ type = 'text', name, value, onChange, placeholder, errors = {}, className = '', ...props }) {
  const hasError = errors[name];

  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={hasError ? hasError : placeholder}
      className={
        (`w-full h-12 rounded-md border outline-none px-4`,
        `${className}`,
        `${hasError ? 'border-red-500 placeholder:text-red-500' : 'border-[#E5E0EB]'}`)
      }
      {...props}
    />
  );
}

export default Input;
