import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        font-family: ${({ theme }) => theme.typography.roboto};
        background-color: ${({ theme }) => theme.colors.background};
    }

    h1, h2, h3, h4, h5, h6, input, button {
        font-family: ${({ theme }) => theme.typography.roboto};
    }
`;
