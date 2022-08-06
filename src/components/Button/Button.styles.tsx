/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components';
import { darken, lighten, transparentize } from 'polished';

export type ButtonVariant = 'solid' | 'outline' | 'ghost';
export type ButtonSize = 'small' | 'standard' | 'large';

export interface StyledButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: ${({ theme, size }) => theme.style.padding.button[size]};
  height: ${({ theme, size }) => theme.style.height.button[size]};
  background-color: ${({ theme, variant }) => (variant === 'solid' ? darken(0.1, theme.palette.purple) : 'transparent')};
  border: ${({ theme, variant }) => (variant === 'ghost' ? 'none' : `${theme.style.borderWidth.button} solid ${theme.palette.purple}`)};
  border-radius: ${({ theme }) => theme.style.borderRadius.button};
  color: ${({ theme }) => theme.text.primary};
  font-weight: ${({ theme }) => theme.style.fontWeight.button};
  font-size: ${({ theme, size }) => theme.style.fontSize.button[size]};
  letter-spacing: ${({ theme }) => theme.style.letterSpacing.button};
  user-select: none;
  transition-property: background-color, border-color, transform, box-shadow;
  transition-duration: ${({ theme }) => theme.style.transitionDuration.button};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme, variant }) => (variant === 'solid' ? theme.palette.purple : transparentize(0.8, theme.palette.purple))};
    border-color: ${({ theme }) => lighten(0.1, theme.palette.purple)};
    color: ${({ theme }) => theme.text.primary};
    transform: ${({ theme }) => theme.style.transform.scale.button.hover};
  }

  &:active {
    transform: ${({ theme }) => theme.style.transform.scale.button.active};
    background-color: ${({ theme, variant }) => (variant === 'solid' ? lighten(0.05, theme.palette.purple) : transparentize(0.7, theme.palette.purple))};
    border-color: ${({ theme }) => lighten(0.15, theme.palette.purple)};
  }

  &:focus {
    box-shadow: 0 0 0 0.3rem ${({ theme }) => transparentize(0.6, theme.palette.purple)};
  }
`;
