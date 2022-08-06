/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components';
import { lighten, transparentize } from 'polished';

export type InputSize = 'small' | 'standard' | 'large';

export interface StyledInputProps {
  inputSize?: InputSize;
}

export const InputWrapper = styled.div<StyledInputProps>`
  margin-top: ${({ theme, inputSize }) => `calc(${theme.style.fontSize.input[inputSize]} + 0.4rem)`};
`;

export const RelativeWrapper = styled.div`
  position: relative;
`;

export const StyledLabel = styled.label<StyledInputProps>`
  position: absolute;
  left: 0;
  bottom: 100%;
  font-size: ${({ theme, inputSize }) => theme.style.fontSize.input[inputSize]};
  font-weight: ${({ theme }) => theme.style.fontWeight.input};
  color: ${({ theme }) => theme.text.secondary};
  letter-spacing: ${({ theme }) => theme.style.letterSpacing.input};
  transform-origin: left center;
  transform: translateX(${({ theme, inputSize }) => theme.style.marginLeft.inputLabel[inputSize]})
    translateY(calc(${({ theme, inputSize }) => theme.style.height.input[inputSize]} / 2 + 50%));
  transition-property: color, transform;
  transition-duration: ${({ theme }) => theme.style.transitionDuration.input};
  user-select: none;

  &:hover {
    cursor: text;
  }
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
  text-overflow: ellipsis;
  transition-property: background-color, border-color, clip-path;
  transition-duration: ${({ theme }) => theme.style.transitionDuration.input};

  &:not(:placeholder-shown) {
    + ${StyledLabel} {
      transform: translate(${({ theme }) => theme.style.borderRadius.input}, -0.4rem) scale(87.5%);
    }
  }

  &:hover {
    color: ${({ theme }) => theme.text.primary};
  }

  &:focus {
    border-color: ${({ theme }) => lighten(0.15, theme.palette.purple)};
    background-color: transparent;

    + ${StyledLabel} {
      color: ${({ theme }) => lighten(0.15, theme.palette.purple)};
      transform: translate(${({ theme }) => theme.style.borderRadius.input}, -0.4rem) scale(87.5%);
    }
  }
`;
