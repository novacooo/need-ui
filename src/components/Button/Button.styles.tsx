/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components';
import { darken, lighten, transparentize } from 'polished';

export type ButtonVariant = 'solid' | 'outline' | 'ghost';
export type ButtonSize = 'small' | 'standard' | 'large';

export interface StyledButtonProps {
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

export const StyledButton = styled.button<StyledButtonProps>`
  padding: ${({ size }) => getPadding(size)};
  background-color: ${({ theme, variant }) =>
    variant === 'solid' ? darken(0.1, theme.palette.purple) : 'transparent'};
  border: ${({ theme, variant }) => (variant === 'ghost' ? 'none' : `0.2rem solid ${theme.palette.purple}`)};
  border-radius: 1.2rem;
  color: ${({ theme }) => theme.text.primary};
  font-weight: 600;
  font-size: ${({ size }) => getFontSize(size)};
  user-select: none;
  transition-property: background-color, border-color, transform, box-shadow;
  transition-duration: 0.1s;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme, variant }) =>
      variant === 'solid' ? theme.palette.purple : transparentize(0.8, theme.palette.purple)};
    border-color: ${({ theme }) => lighten(0.1, theme.palette.purple)};
    color: ${({ theme }) => theme.text.primary};
    transform: scale(0.98);
  }

  &:active {
    transform: scale(0.96);
    background-color: ${({ theme, variant }) =>
      variant === 'solid' ? lighten(0.05, theme.palette.purple) : transparentize(0.7, theme.palette.purple)};
    border-color: ${({ theme }) => lighten(0.15, theme.palette.purple)};
  }

  &:focus {
    box-shadow: 0 0 0 0.3rem ${({ theme }) => transparentize(0.6, theme.palette.purple)};
  }
`;