import styled from 'styled-components';

export const ColourInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  
  &:not(:last-of-type) {
    margin-bottom: 4px;
  }
`;

export const ColourBrand = styled.span`
  font-weight: 500;
`;

export const ColourNumber = styled.span`
  display: inline-block;
  font-weight: 300;
  margin-left: 10px;
`;