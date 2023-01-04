import styled from "styled-components";

import { theme } from "../../shared-styles/theme.styled";

export const SearchWrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const IconWrapper = styled.div`
  margin-right: 8px;
  width: auto;
`;

export const SearchInput = styled.input`
  background: ${theme.background};
  border: 0;
  border-bottom: 1px solid black;
  box-sizing: border-box;
  margin-left: 8px;
  min-width: 200px;
`;
