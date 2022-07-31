export interface ITheme {
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
  background: {
    primary: string;
  };
  text: {
    primary: string;
  };
  palette: {
    purple: string;
  };
}

export const defaultDarkTheme: ITheme = {
  breakpoints: {
    sm: '@media (min-width: 640px)',
    md: '@media (min-width: 768px)',
    lg: '@media (min-width: 1024px)',
    xl: '@media (min-width: 1280px)',
    '2xl': '@media (min-width: 1536px)',
  },
  background: {
    primary: 'hsl(241, 4%, 9%)',
  },
  text: {
    primary: 'hsl(0, 0%, 100%)',
  },
  palette: {
    purple: 'hsl(263, 65%, 45%)',
  },
};
