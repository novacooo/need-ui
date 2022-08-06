import React, { useId } from 'react';
import { InputSize, InputWrapper, StyledInput, StyledInputProps, StyledLabel } from './Input.styles';

export interface InputProps extends StyledInputProps {
  label: string;
  size?: InputSize;
}

const Input = ({ label, size = 'standard' }: InputProps) => {
  const id = useId();

  return (
    <InputWrapper>
      <StyledInput id={id} inputSize={size} type="text" />
      <StyledLabel htmlFor={id} inputSize={size}>
        {label}
      </StyledLabel>
    </InputWrapper>
  );
};

export default Input;
