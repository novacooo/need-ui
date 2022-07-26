import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  label: string;
}

const StyledButton = styled.button`
  background-color: red;

  &:hover {
    cursor: pointer;
    background-color: blue;
  }
`;

const Button = (props: ButtonProps) => {
  return <StyledButton>{props.label}</StyledButton>;
};

export default Button;
