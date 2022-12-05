import { theme } from "./shared-styles/theme.styled";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto Medium'), url('https://roboto-webfont.googlecode.com/files/Roboto-Medium-webfont.woff') format('woff');
        font-weight: 500;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto Light'), url('https://roboto-webfont.googlecode.com/files/Roboto-Light-webfont.woff') format('woff');
        font-weight: 300;
        font-style: normal;
    }
  
    body {
        background: ${theme.background};
        font-family: ${theme.font};
        font-weight: 300;
        margin: 0;
    }
`;
