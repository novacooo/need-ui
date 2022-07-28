import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { ITheme } from '../../theme';
import GlobalStyle from '../../theme/GlobalStyle';

interface NeedProviderProps {
  children: ReactNode;
}

const theme: ITheme = {
  palette: {
    purple: {
      standard: 'hsl(263, 65%, 45%)',
      dark: 'hsla(263, 65%, 25%, 1)',
    },
  },
};

const NeedProvider = ({ children }: NeedProviderProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default NeedProvider;
