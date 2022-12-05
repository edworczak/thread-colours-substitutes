import { SearchWrapper, SearchInput } from "./search.styled";
import pl from "../../data/pl";
import searchListener from "../../events";
import { useEffect } from "react";
import brandNames from "../../data/brandNames";

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
      <label>
        {pl.header.search}:
        <SearchInput type="text" onKeyDown={handleKeyDown} />
      </label>
    </SearchWrapper>
  );
};

export default Search;
