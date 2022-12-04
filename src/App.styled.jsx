import { theme } from "./shared-styles/theme.styled";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
      background: ${theme.background};
      font-family: 'Roboto Condensed', sans-serif;
      margin: 0;
    }
`;