import React, { useEffect, useId, useRef, useState } from 'react';
import { InputSize, InputWrapper, StyledInput, StyledInputProps, StyledLabel } from './Input.styles';

export interface InputProps extends StyledInputProps {
  label: string;
  size?: InputSize;
}

const Input = ({ label, size = 'standard' }: InputProps) => {
  const id = useId();
  const labelRef = useRef<HTMLLabelElement>();
  const [labelWidth, setLabelWidth] = useState<number>(0);

  useEffect(() => {
    if (labelRef.current.clientWidth) {
      setLabelWidth(labelRef.current.clientWidth);
    }
  }, [labelRef.current?.clientWidth]);

  return (
    <InputWrapper>
      <StyledInput id={id} type="text" placeholder=" " inputSize={size} labelWidth={labelWidth} />
      <StyledLabel ref={labelRef} htmlFor={id} inputSize={size}>
        {label}
      </StyledLabel>
    </InputWrapper>
  );
};

export default Input;
