import styled from 'styled-components';
import { transparentize, lighten } from 'polished';

export type InputSize = 'small' | 'standard' | 'large';

export interface StyledInputProps {
  inputSize?: InputSize;
}

export const StyledInput = styled.input<StyledInputProps>`
  padding: ${({ theme, inputSize }) => theme.style.padding.input[inputSize]};
  height: ${({ theme, inputSize }) => theme.style.height.input[inputSize]};
  font-size: ${({ theme, inputSize }) => theme.style.fontSize.input[inputSize]};
  background-color: ${({ theme }) => theme.background.secondary};
  border: none;
  border-radius: ${({ theme }) => theme.style.borderRadius.input};
  color: ${({ theme }) => theme.text.primary};
  transition-property: background-color, border-color, border-width, box-shadow;
  transition-duration: ${({ theme }) => theme.style.transitionDuration.input};

  &:hover {
    color: ${({ theme }) => theme.text.primary};
  }

  &:focus {
    border-style: solid;
    border-width: 0.2rem;
    border-color: ${({ theme }) => lighten(0.15, theme.palette.purple)};
    box-shadow: 0 0 0 0.3rem ${({ theme }) => transparentize(0.6, theme.palette.purple)};
  }
`;
