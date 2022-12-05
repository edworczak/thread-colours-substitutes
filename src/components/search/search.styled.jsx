import styled from "styled-components";
import { theme } from "../../shared-styles/theme.styled";

export const SearchWrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const SearchInput = styled.input`
  background: ${theme.background};
  border: 0;
  border-bottom: 1px solid black;
  box-sizing: border-box;
  min-width: 200px;
`;
