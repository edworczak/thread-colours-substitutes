import styled from "styled-components";

export const ColourInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  &:not(:last-of-type) {
    margin-bottom: 4px;
  }
`;

export const TextWrapper = styled.div`
  width: auto;
`;

export const NumberWrapper = styled.div`
  margin-left: 10px;
  width: auto;
`;

export const ColourBrand = styled.h4`
  font-weight: 500;
  margin: 0;
`;

export const ColourNumber = styled.p`
  font-weight: ${(props) => (props.accurate ? 500 : 300)};
  margin: 0;

  &:not(:first-of-type) {
    margin-top: 4px;
  }
`;
