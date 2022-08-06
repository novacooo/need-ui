/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components';
import { lighten, transparentize } from 'polished';

export type InputSize = 'small' | 'standard' | 'large';

interface SizeProps {
  inputSize?: InputSize;
}

export interface StyledInputProps extends SizeProps {
  labelWidth: number;
}

const generatePolygon = (margin: string, borderWidth: string, labelWidth: number): string => {
  const sidePadding = '0.5rem';
  let result = 'polygon(0 0, 0 100%, 100% 100%, 100% 0,';

  result += `calc(${labelWidth / 10}rem + ${margin} + ${sidePadding}) 0,`;
  result += `calc(${labelWidth / 10}rem + ${margin} + ${sidePadding}) ${borderWidth},`;
  result += `calc(${margin} - ${sidePadding}) ${borderWidth},`;
  result += `calc(${margin} - ${sidePadding}) 0)`;

  return result;
};

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledLabel = styled.label<SizeProps>`
  position: absolute;
  bottom: 100%;
  margin-left: ${({ theme, inputSize }) => theme.style.marginLeft.inputLabel[inputSize]};
  font-size: ${({ theme, inputSize }) => theme.style.fontSize.input[inputSize]};
  font-weight: ${({ theme }) => theme.style.fontWeight.input};
  color: ${({ theme }) => theme.text.primary};
  letter-spacing: ${({ theme }) => theme.style.letterSpacing.input};
  transform-origin: left center;
  transform: translateY(50%) translateY(calc(${({ theme, inputSize }) => theme.style.height.input[inputSize]} / 2));
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
  transition-property: background-color, border-color, clip-path;
  transition-duration: ${({ theme }) => theme.style.transitionDuration.input};

  &:not(:placeholder-shown) {
    + ${StyledLabel} {
      transform: translateY(50%) scale(82%);
    }
  }

  &:hover {
    color: ${({ theme }) => theme.text.primary};
  }

  &:focus {
    border-color: ${({ theme }) => lighten(0.15, theme.palette.purple)};
    background-color: transparent;
    clip-path: ${({ theme, labelWidth, inputSize }) =>
      generatePolygon(theme.style.marginLeft.inputLabel[inputSize], theme.style.borderWidth.input, labelWidth * 0.82)};

    + ${StyledLabel} {
      color: ${({ theme }) => lighten(0.15, theme.palette.purple)};
      transform: translateY(50%) scale(82%);
    }
  }
`;
