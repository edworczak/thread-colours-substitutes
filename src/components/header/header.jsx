import {
  HeaderWrapper,
  HeaderLogo,
  HeaderName,
  LogoWrapper,
} from "./header.styled";
import pl from "../../data/pl";

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <HeaderLogo>{pl.header.brand}</HeaderLogo>
        <HeaderName>{pl.header.name}</HeaderName>
      </LogoWrapper>
    </HeaderWrapper>
  );
};

export default Header;
