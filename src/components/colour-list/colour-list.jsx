import { ColourListWrapper } from "./colour-list.styled";
import Colour from "../colour/colour";
import colours from "../../data/colours";
import { useEffect, useState } from "react";
import searchListener from "../../events";

const ColourList = () => {
  const [searchNumber, setSearchNumber] = useState({
    data: {
      number: "",
    },
  });
  let visibleColours = Object.values(colours);

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = () => {
    searchListener.on("searching", (data) => {
      setSearchNumber({
        ...data,
      });
    });
  };

  return (
    <ColourListWrapper>
      {visibleColours.map((colour, index) => {
        return (
          <Colour
            key={`${index}`}
            rgb={colour.rgb}
            dmc={colour.dmc}
            anchor={colour.anchor}
            ariadna={colour.ariadna}
          />
        );
      })}
    </ColourListWrapper>
  );
};

export default ColourList;
