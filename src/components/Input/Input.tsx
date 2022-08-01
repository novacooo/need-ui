import React from 'react';
import { InputSize, StyledInput, StyledInputProps } from './Input.styles';

export interface InputProps extends StyledInputProps {
  placeholder: string;
  size?: InputSize;
}

const Input = ({ placeholder, size = 'standard' }: InputProps) => <StyledInput placeholder={placeholder} inputSize={size} />;

export default Input;
