import styled from "styled-components";
import { theme } from "../../shared-styles/theme.styled";

export const ColourWrapper = styled.div`
  min-width: 150px;
  padding: 0 10px 20px;
`;

export const ColourBG = styled.div`
  background: ${theme.background};
  border-radius: 2px;
  box-shadow: ${theme.shadow};
  overflow: hidden;
`;

export const ColourImage = styled.div`
  background: ${(props) => props.rgb || theme.background};
  height: 100px;
  width: 100%;
`;

export const ColourInfoWrapper = styled.div`
  padding: 10px 5px;
`;
