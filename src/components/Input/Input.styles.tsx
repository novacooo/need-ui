import styled from 'styled-components';
import { transparentize, lighten } from 'polished';

export type InputSize = 'small' | 'standard' | 'large';

export interface StyledInputProps {
  size?: InputSize;
}

const getFontSize = (size: InputSize): string => {
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

export const StyledInput = styled.input<StyledInputProps>`
  padding: 0 1.4rem;
  height: 4.4rem;
  font-size: ${({ size }) => getFontSize(size)};
  background-color: #ffffff10;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.standard};
  color: ${({ theme }) => theme.text.primary};
  transition-property: background-color, border-color, border-width, box-shadow;
  transition-duration: 0.1s;

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
