import styled from 'styled-components';
import { theme } from "../../shared-styles/theme.styled";

export const ColourWrapper = styled.div`
  background: ${theme.background};
  border-radius: 2px;
  box-shadow: ${theme.shadow};
  margin: 0 10px 20px;
  overflow: hidden;
  width: calc(25% - 20px);
`;

export const ColourImage = styled.div`
  background: ${props => props.rgb || theme.background};
  height: 100px;
  width: 100%;
`;

export const ColourInfoWrapper = styled.div`
    padding: 10px 5px;
`;