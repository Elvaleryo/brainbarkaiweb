import { createTheme, lighten, darken } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#0000b2',
      main: '#000077',
      dark: '#000029',
    },
    text: {
      primary: '#fff',
      secondary: '#9a99aa',
    },
  },
  typography: {
    fontFamily: "'Roboto Slab', sans-serif",
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiTab: {
      defaultProps: { disableRipple: true },
    },
    MuiButtonBase: {
      defaultProps: { disableRipple: true },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#18202c',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          transform: 'none',
          position: 'static',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          marginBottom: '13px',
        },
        rounded: {
          borderRadius: '16px',
        },
        elevation: {
          marginBottom: '0',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontSize: '16px',
          fontWeight: 'bold',
          padding: '12.5px 35px',
          "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
        },
        outlined: {
          '&.MuiButton-outlinedInfo': {
            color: '#16192C',
            borderColor: lighten('#16192C', 0.9),
            '&:hover': {
              backgroundColor: lighten('#16192C', 0.9),
              borderColor: '#16192C',
            },
          },
        },
        sizeLarge: {
          fontSize: '16px',
        },
        contained: {
          boxShadow: 'none',
          '&:active': {
            boxShadow: 'none',
          },
        },
        containedSecondary: {
          background: '#F16063',
          boxShadow: 'none',

          '&:hover': {
            background: darken('#F16063', 0.1),
            boxShadow: 'none',
          },
        },
        containedPrimary: {
          // background: '#1890FF',
          background: '#1890FF !important',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 4,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 4,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#E4ECF7',
          borderColor: '#E4ECF7',
          margin: '6px 0',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontWeight: 500,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: 'inherit',
          marginRight: 0,
          '& svg': {
            fontSize: 20,
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 32,
          height: 32,
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          fontSize: '0.875rem',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        body2: {
          fontSize: '0.75rem',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          '&.MuiPaper-root': {
            margin: 0,
          },
        },
      },
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 768,
    },
  },
});

export default theme;

declare module '@mui/material/styles' {
  // eslint-disable-next-line
  interface BreakpointOverrides {
    xs: true; // false removes the breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobile: true; // true adds the  breakpoint
  }
}
