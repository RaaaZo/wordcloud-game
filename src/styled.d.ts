import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      grey: string;
      black: string;
      blue: string;
      background: string;
      white: string;
    };
    typography: {
      roboto: string;
    };
    fontWeight: {
      bold: number;
      regular: number;
    };
  }
}
