import React, { useId } from 'react';
import { InputSize, InputWrapper, RelativeWrapper, StyledInput, StyledInputProps, StyledLabel } from './Input.styles';

export interface InputProps extends StyledInputProps {
  label: string;
  size?: InputSize;
}

const Input = ({ label, size = 'standard' }: InputProps) => {
  const id = useId();

  return (
    <InputWrapper inputSize={size}>
      <RelativeWrapper>
        <StyledInput id={id} type="text" placeholder=" " inputSize={size} />
        <StyledLabel htmlFor={id} inputSize={size}>
          {label}
        </StyledLabel>
      </RelativeWrapper>
    </InputWrapper>
  );
};

export default Input;
