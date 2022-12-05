import {
  HeaderWrapper,
  HeaderLogo,
  HeaderName,
  LogoWrapper,
} from "./header.styled";
import pl from "../../data/pl";
import Search from "../search/search";

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <HeaderLogo>{pl.header.brand}</HeaderLogo>
        <HeaderName>{pl.header.name}</HeaderName>
      </LogoWrapper>
      <Search />
    </HeaderWrapper>
  );
};

export default Header;
