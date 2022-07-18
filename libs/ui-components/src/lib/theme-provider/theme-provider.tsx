import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary: PaletteOptions['primary'];
  }
}

export const theme = createTheme({
  palette: {
    background: {
      default: '#F0F2F3',
    },
    primary: {
      light: '#66C5FF',
      main: '#009EFF',
      contrastText: '#FFF',
    },
    tertiary: {
      light: '#FAFAFA',
      main: '#E6EAEC',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: ['Lato', 'Arial', 'sans-serif'].join(','),
    h3: {
      fontFamily: 'Montserrat',
      fontSize: 32,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: 18,
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
}

export default ThemeProvider;
