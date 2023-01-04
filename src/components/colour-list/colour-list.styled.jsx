import styled from "styled-components";

import { theme } from "../../shared-styles/theme.styled";

export const ColourListWrapper = styled.div`
  align-items: stretch;
  box-sizing: border-box;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px 10px 0;
  width: 100%;

  @media only screen and (max-width: ${theme.breakpoints.columns7}) {
    grid-template-columns: repeat(7, 1fr);
  }

  @media only screen and (max-width: ${theme.breakpoints.columns6}) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media only screen and (max-width: ${theme.breakpoints.columns5}) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media only screen and (max-width: ${theme.breakpoints.columns4}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media only screen and (max-width: ${theme.breakpoints.columns3}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: ${theme.breakpoints.columns2}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: ${theme.breakpoints.columns1}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
