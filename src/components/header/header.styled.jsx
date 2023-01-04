import styled from "styled-components";

import { theme } from "../../shared-styles/theme.styled";

export const HeaderWrapper = styled.header`
  align-items: flex-end;
  background: ${theme.background};
  box-shadow: ${theme.shadow};
  display: flex;
  justify-content: space-between;
  padding: 20px;

  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: 16px;
  }
`;

export const IconWrapper = styled.a`
  display: inline-block;
  margin-right: 8px;
`;

export const HeaderLogo = styled.h2`
  display: inline;
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  margin: 0;
`;

export const HeaderName = styled.h1`
  display: inline;
  font-size: 20px;
  font-weight: 300;
  line-height: 24px;
  margin: 0;
`;
