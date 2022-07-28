import React from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

export enum ButtonVariant {
  Solid = 'solid',
  Outline = 'outline',
  Ghost = 'ghost',
}

export enum ButtonSize {
  Small = 'small',
  Standard = 'standard',
  Large = 'large',
}

export interface ButtonProps {
  children: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const getPadding = (size: ButtonSize): string => {
  switch (size) {
    case ButtonSize.Small:
      return '0.8rem 1.4rem';
    case ButtonSize.Standard:
      return '1rem 1.8rem';
    case ButtonSize.Large:
      return '1.2rem 2.2rem';
  }
};

const getFontSize = (size: ButtonSize): string => {
  switch (size) {
    case ButtonSize.Small:
      return '1.4rem';
    case ButtonSize.Standard:
      return '1.6rem';
    case ButtonSize.Large:
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

const Button = ({ children, variant = ButtonVariant.Solid, size = ButtonSize.Standard }: ButtonProps) => (
  <StyledButton variant={variant} size={size}>
    {children}
  </StyledButton>
);

export default Button;
