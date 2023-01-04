import { faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import pl from "../../data/pl";
import { theme } from "../../shared-styles/theme.styled";
import Search from "../search/search";
import {
  HeaderLogo,
  HeaderName,
  HeaderWrapper,
  IconWrapper,
  LogoWrapper,
} from "./header.styled";

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <HeaderLogo>
          <IconWrapper
            href="https://www.instagram.com/kologospodyninternetowych/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} color={theme.colours.main} />
          </IconWrapper>
          <IconWrapper href="https://discord.gg/6r2c9EycVg" target="_blank">
            <FontAwesomeIcon icon={faDiscord} color={theme.colours.main} />
          </IconWrapper>
          {pl.header.brand}
        </HeaderLogo>
        <HeaderName>{pl.header.name}</HeaderName>
      </LogoWrapper>
      <Search />
    </HeaderWrapper>
  );
};

export default Header;
