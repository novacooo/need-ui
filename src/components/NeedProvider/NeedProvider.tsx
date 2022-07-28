import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultDarkTheme, ITheme } from '../../theme';
import GlobalStyle from '../../theme/GlobalStyle';

interface NeedProviderProps {
  children: ReactNode;
  theme?: ITheme;
}

const NeedProvider = ({ children, theme = defaultDarkTheme }: NeedProviderProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default NeedProvider;
