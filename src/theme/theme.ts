export interface ITheme {
  breakpoint: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
  background: {
    primary: string;
    secondary: string;
  };
  text: {
    primary: string;
  };
  palette: {
    white: string;
    purple: string;
  };
  style: {
    margin: {
      inputLabel: {
        small: string;
        standard: string;
        large: string;
      };
    };
    padding: {
      button: {
        small: string;
        standard: string;
        large: string;
      };
      input: {
        small: string;
        standard: string;
        large: string;
      };
    };
    height: {
      button: {
        small: string;
        standard: string;
        large: string;
      };
      input: {
        small: string;
        standard: string;
        large: string;
      };
    };
    borderWidth: {
      button: string;
      input: string;
    };
    borderRadius: {
      button: string;
      input: string;
    };
    fontSize: {
      button: {
        small: string;
        standard: string;
        large: string;
      };
      input: {
        small: string;
        standard: string;
        large: string;
      };
    };
    fontWeight: {
      button: number;
      input: number;
    };
    letterSpacing: {
      global: string;
      button: string;
      input: string;
    };
    transform: {
      scale: {
        button: {
          hover: string;
          active: string;
        };
      };
    };
    transitionDuration: {
      button: string;
      input: string;
    };
  };
}

export const defaultDarkTheme: ITheme = {
  breakpoint: {
    sm: '@media (min-width: 640px)',
    md: '@media (min-width: 768px)',
    lg: '@media (min-width: 1024px)',
    xl: '@media (min-width: 1280px)',
    '2xl': '@media (min-width: 1536px)',
  },
  background: {
    primary: 'hsl(241, 4%, 9%)',
    secondary: 'hsl(241, 4%, 15%)',
  },
  text: {
    primary: 'hsl(0, 0%, 100%)',
  },
  palette: {
    white: 'hsl(0, 0%, 100%)',
    purple: 'hsl(263, 65%, 45%)',
  },
  style: {
    margin: {
      inputLabel: {
        small: '0 0 0 1.6rem',
        standard: '0 0 0 2rem',
        large: '0 0 0 2.4rem',
      },
    },
    padding: {
      button: {
        small: '0 1.4rem',
        standard: '0 1.8rem',
        large: '0 2.2rem',
      },
      input: {
        small: '0 1.4rem',
        standard: '0 1.8rem',
        large: '0 2.2rem',
      },
    },
    height: {
      button: {
        small: '3.6rem',
        standard: '4.2rem',
        large: '4.6rem',
      },
      input: {
        small: '3.6rem',
        standard: '4.2rem',
        large: '4.6rem',
      },
    },
    borderWidth: {
      button: '0.2rem',
      input: '0.2rem',
    },
    borderRadius: {
      button: '1.2rem',
      input: '1.2rem',
    },
    fontSize: {
      button: {
        small: '1.4rem',
        standard: '1.6rem',
        large: '1.6rem',
      },
      input: {
        small: '1.4rem',
        standard: '1.6rem',
        large: '1.6rem',
      },
    },
    fontWeight: {
      button: 600,
      input: 400,
    },
    letterSpacing: {
      global: '0.1rem',
      button: '0.15rem',
      input: '0.15rem',
    },
    transform: {
      scale: {
        button: {
          hover: 'scale(0.98)',
          active: 'scale(0.96)',
        },
      },
    },
    transitionDuration: {
      button: '0.1s',
      input: '0.1s',
    },
  },
};
