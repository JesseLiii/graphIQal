import React from 'react';

type ButtonTextProps = {
  text: String;
};

const ButtonText: React.FC<ButtonTextProps> = ({ text }) => {
  return <p className='text-2xl font-bold underline text-connection'>{text}</p>;
};
export default ButtonText;
