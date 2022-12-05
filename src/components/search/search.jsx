import { SearchWrapper, SearchInput } from "./search.styled";
import pl from "../../data/pl";
import searchListener from "../../events";
import { useEffect } from "react";

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

    if (number.includes(pl.brands.dmc)) {
      brand = pl.brands.dmc;
    } else if (number.includes(pl.brands.anchor)) {
      brand = pl.brands.anchor;
    } else if (number.includes(pl.brands.ariadna)) {
      brand = pl.brands.ariadna;
    }

    number = number.replace(brand, '');
    number = number.replace(' ', '');

    searchListener.dispatch("searching", {
      number: number,
      brand: brand,
    });
  };

  return (
    <SearchWrapper>
      <label>
        {pl.header.search}:
        <SearchInput
          type="text"
          onKeyDown={handleKeyDown}
        />
      </label>
    </SearchWrapper>
  );
};

export default Search;
