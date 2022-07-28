import React from 'react';
import styled from 'styled-components';

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

const StyledButton = styled.button<ButtonProps>`
  padding: ${({ size }) => getPadding(size)};
  background-color: ${({ theme }) => theme.palette.purple.standard};
  border: 1px solid ${({ theme }) => theme.palette.purple.dark};
  border-radius: 1.2rem;
  color: #ffffff;
  font-weight: 600;
  font-size: 1.6rem;
  transition-property: background-color, border-color;
  transition-duration: 0.2s;

  &:hover {
    cursor: pointer;
  }
`;

const Button = ({ children, variant = ButtonVariant.Solid, size = ButtonSize.Standard }: ButtonProps) => (
  <StyledButton variant={variant} size={size}>
    {children}
  </StyledButton>
);

export default Button;
