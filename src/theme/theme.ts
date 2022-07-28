export interface ITheme {
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
