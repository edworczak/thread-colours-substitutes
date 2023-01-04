import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

import brandNames from "../../data/brandNames";
import pl from "../../data/pl";
import searchListener from "../../events";
import { IconWrapper, SearchInput, SearchWrapper } from "./search.styled";

const Search = () => {
  useEffect(() => {
    getSearchedNumber("");
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      getSearchedNumber(e);
    }
  };

  const getSearchedNumber = (e) => {
    let number = e === "" ? "" : e.target.value.toUpperCase();
    let brand = "";

    if (number.includes(brandNames.upperCase.dmc)) {
      brand = brandNames.upperCase.dmc;
    } else if (number.includes(brandNames.upperCase.anchor)) {
      brand = brandNames.upperCase.anchor;
    } else if (number.includes(brandNames.upperCase.ariadna)) {
      brand = brandNames.upperCase.ariadna;
    } else {
      brand = "";
    }

    number = number.replace(brand, "");
    number = number.replace(" ", "");

    searchListener.dispatch("searching", {
      number: number,
      brand: brand,
    });
  };

  return (
    <SearchWrapper>
      <IconWrapper>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </IconWrapper>

      <label>
        {pl.header.search}:
        <SearchInput type="text" onKeyDown={handleKeyDown} />
      </label>
    </SearchWrapper>
  );
};

export default Search;
