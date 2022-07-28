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
  background-color: hsl(263, 65%, 45%);
  border: 1px solid hsla(263, 65%, 25%, 1);
  border-radius: 1.2rem;
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
