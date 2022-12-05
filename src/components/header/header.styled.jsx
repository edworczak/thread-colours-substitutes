import styled from "styled-components";
import { theme } from "../../shared-styles/theme.styled";

export const HeaderWrapper = styled.header`
  background: ${theme.background};
  box-shadow: ${theme.shadow};
  padding: 20px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderLogo = styled.h2`
  display: inline-block;
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  margin: 0;
`;

export const HeaderName = styled.h1`
  display: inline-block;
  font-size: 20px;
  font-weight: 300;
  line-height: 24px;
  margin: 0;
`;
