import React from 'react';
import { StyledInput, StyledInputProps } from './Input.styles';

export interface InputProps extends StyledInputProps {
  placeholder: string;
}

const Input = ({ placeholder }: InputProps) => <StyledInput placeholder={placeholder} />;

export default Input;
