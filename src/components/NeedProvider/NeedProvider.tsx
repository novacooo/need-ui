import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { defaultDarkTheme, ITheme } from '../../theme';
import GlobalStyle from '../../theme/GlobalStyle';

interface NeedProviderProps {
  children: ReactNode;
  theme?: ITheme;
}

const NeedProvider = ({ children, theme = defaultDarkTheme }: NeedProviderProps) => (
  <>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Urbanist:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </>
);

export default NeedProvider;
