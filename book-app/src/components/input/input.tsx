import React from 'react';

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
  isSecure?: boolean;
}

const MyCustomInput: React.FC<InputProps> = ({ placeholder, value, onChange, isSecure = false }) => {
  return (
    <input
      className='p-3 w-full border-[1px] border-slate-500 rounded-lg autofill:bg-white outline-primary'
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
      type={isSecure ? 'password' : 'text'}
    />
  );
};

export default MyCustomInput;
