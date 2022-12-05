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
      brand: "",
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

      const isDMC = dmc.includes(data.number);
      const isAnchor = anchor.includes(data.number);
      const isAriadna = ariadna.includes(data.number);
      const anyBrand = isDMC || isAnchor || isAriadna;
      const noBrand = data.brand === "";

      if ((noBrand && anyBrand)) {
        setPrint(true);
      } else if (isDMC && data.brand === pl.brands.dmc) {
        setPrint(true);
      } else if (isAnchor && data.brand === pl.brands.anchor) {
        setPrint(true);
      } else if (isAriadna && data.brand === pl.brands.ariadna) {
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
