import React from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../tailwind.config';

// const fullConfig = resolveConfig(tailwindConfig);

type ButtonTextProps = {
  text: String;
};

const ButtonText: React.FC<ButtonTextProps> = ({ text }) => {
  return <p className='text-2xl font-bold underline '>{text}</p>;
};
export default ButtonText;
