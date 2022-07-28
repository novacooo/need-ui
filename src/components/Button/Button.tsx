import React from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

type ButtonVariant = 'solid' | 'outline' | 'ghost';

type ButtonSize = 'small' | 'standard' | 'large';

export interface ButtonProps {
  children: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const getPadding = (size: ButtonSize): string => {
  switch (size) {
    case 'small':
      return '0.8rem 1.4rem';
    case 'standard':
      return '1rem 1.8rem';
    case 'large':
      return '1.2rem 2.2rem';
    default:
      return '1rem 1.8rem';
  }
};

const getFontSize = (size: ButtonSize): string => {
  switch (size) {
    case 'small':
      return '1.4rem';
    case 'standard':
      return '1.6rem';
    case 'large':
      return '1.6rem';
    default:
      return '1.6rem';
  }
};

const StyledButton = styled.button<ButtonProps>`
  padding: ${({ size }) => getPadding(size)};
  background-color: ${({ theme }) => darken(0.15, theme.palette.purple)};
  border: 2px solid ${({ theme }) => theme.palette.purple};
  border-radius: 1.2rem;
  color: ${({ theme }) => theme.text.primary};
  font-weight: 600;
  font-size: ${({ size }) => getFontSize(size)};
  transition-property: background-color, border-color;
  transition-duration: 0.2s;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.purple};
    border-color: ${({ theme }) => lighten(0.15, theme.palette.purple)};
  }
`;

const Button = ({ children, variant = 'solid', size = 'standard' }: ButtonProps) => (
  <StyledButton variant={variant} size={size}>
    {children}
  </StyledButton>
);

export default Button;
