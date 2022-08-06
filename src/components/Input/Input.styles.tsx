import styled from 'styled-components';
import { lighten, transparentize } from 'polished';

export type InputSize = 'small' | 'standard' | 'large';

export interface StyledInputProps {
  inputSize?: InputSize;
}

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledLabel = styled.label<StyledInputProps>`
  position: absolute;
  bottom: 50%;
  margin: ${({ theme, inputSize }) => theme.style.margin.inputLabel[inputSize]};
  font-size: ${({ theme, inputSize }) => theme.style.fontSize.input[inputSize]};
  font-weight: ${({ theme }) => theme.style.fontWeight.input};
  color: ${({ theme }) => theme.text.primary};
  letter-spacing: ${({ theme }) => theme.style.letterSpacing.input};
  transform-origin: left center;
  transform: translateY(50%);
  transition-property: color, transform;
  transition-duration: ${({ theme }) => theme.style.transitionDuration.input};
`;

export const StyledInput = styled.input<StyledInputProps>`
  padding: ${({ theme, inputSize }) => theme.style.padding.input[inputSize]};
  height: ${({ theme, inputSize }) => theme.style.height.input[inputSize]};
  background-color: ${({ theme }) => transparentize(0.95, theme.palette.white)};
  border-style: solid;
  border-width: ${({ theme }) => theme.style.borderWidth.input};
  border-color: transparent;
  border-radius: ${({ theme }) => theme.style.borderRadius.input};
  font-size: ${({ theme, inputSize }) => theme.style.fontSize.input[inputSize]};
  font-weight: ${({ theme }) => theme.style.fontWeight.input};
  color: ${({ theme }) => theme.text.primary};
  letter-spacing: ${({ theme }) => theme.style.letterSpacing.input};
  transition-property: background-color, border-color, clip-path;
  transition-duration: ${({ theme }) => theme.style.transitionDuration.input};
  clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0, 10rem 0, 10rem 0, 0 0, 0 0);

  &:hover {
    color: ${({ theme }) => theme.text.primary};
  }

  &:focus {
    border-color: ${({ theme }) => lighten(0.15, theme.palette.purple)};
    background-color: transparent;
    clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0, 10rem 0, 10rem 0.2rem, 1rem 0.2rem, 1rem 0);

    + ${StyledLabel} {
      transform: translateY(50%) translateY(calc(${({ theme, inputSize }) => `-${theme.style.height.input[inputSize]}`} / 2)) scale(80%);
      color: ${({ theme }) => lighten(0.15, theme.palette.purple)};
    }
  }
`;
