import { useEffect, useState } from "react";

import {
  ColourWrapper,
  ColourImage,
  ColourInfoWrapper,
  ColourBG,
} from "./colour.styled";

import ColourInfo from "../colour-info/colour-info";
import pl from "../../data/pl";

import searchListener from "../../events";

const Colour = ({ rgb, dmc, anchor, ariadna }) => {
  const [searchNumber, setSearchNumber] = useState({
    data: {
      number: "",
    },
  });

  const [print, setPrint] = useState(true);

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = () => {
    searchListener.on("searching", (data) => {
      setSearchNumber({
        ...data,
      });

      if (
        dmc.includes(data.number) ||
        anchor.includes(data.number) ||
        ariadna.includes(data.number) ||
        data.number === ""
      ) {
        setPrint(true);
      } else {
        setPrint(false);
      }
    });
  };

  return (
    <ColourWrapper
      print={print}
      data-dmc={dmc}
      data-anchor={anchor}
      data-ariadna={ariadna}
    >
      <ColourBG>
        <ColourImage rgb={rgb} />
        <ColourInfoWrapper>
          <ColourInfo brand={pl.colour.dmc} number={dmc} />
          <ColourInfo brand={pl.colour.anchor} number={anchor} />
          <ColourInfo brand={pl.colour.ariadna} number={ariadna} />
        </ColourInfoWrapper>
      </ColourBG>
    </ColourWrapper>
  );
};

export default Colour;
