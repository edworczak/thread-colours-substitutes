import { SearchWrapper, SearchInput } from "./search.styled";
import pl from "../../data/pl";
import searchListener from "../../events";
import { useEffect } from "react";

const Search = () => {
  useEffect(() => {
    getSearchedNumber("");
  }, []);

  const handleSearch = (e) => {
    getSearchedNumber(e);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      getSearchedNumber(e);
    }
  };

  const getSearchedNumber = (e) => {
    const number = e === "" ? "" : e.target.value.toUpperCase();
    searchListener.dispatch("searching", { number: number });
  };

  return (
    <SearchWrapper>
      <label>
        {pl.header.search}:
        <SearchInput
          type="text"
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
        />
      </label>
    </SearchWrapper>
  );
};

export default Search;
