import React from 'react';
import { StyledButton, StyledButtonProps } from './Button.styles';

export interface ButtonProps extends StyledButtonProps {
  children: string;
}

const Button = ({ children, variant = 'solid', size = 'standard' }: ButtonProps) => (
  <StyledButton variant={variant} size={size}>
    {children}
  </StyledButton>
);

export default Button;
