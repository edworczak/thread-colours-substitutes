import { useEffect, useState } from "react";

import {
  ColourWrapper,
  ColourImage,
  ColourInfoWrapper,
  ColourBG,
} from "./colour.styled";

import ColourInfo from "../colour-info/colour-info";
import brandNames from "../../data/brandNames";
import searchListener from "../../events";

const Colour = ({ colour }) => {
  const { rgb, dmc, anchor, ariadna } = colour;

  const updateBrandColours = (codeName, brand, label, number) => {
    // Create object with Colour details from each brand
    return {
      codeName: codeName,
      brand: brand,
      label: label,
      number: number,
    };
  };

  // Create object as a base for rendering loop
  const brandColours = {
    dmc: updateBrandColours(
      brandNames.codeName.dmc,
      brandNames.upperCase.dmc,
      brandNames.short.dmc,
      dmc
    ),
    anchor: updateBrandColours(
      brandNames.codeName.anchor,
      brandNames.upperCase.anchor,
      brandNames.short.anchor,
      anchor
    ),
    ariadna: updateBrandColours(
      brandNames.codeName.ariadna,
      brandNames.upperCase.ariadna,
      brandNames.short.ariadna,
      ariadna
    ),
  };

  // Check if colour is a match with search
  const [searchMatch, setSearchMatch] = useState(true);

  // Check if colour has exact number with search
  const [exactMatch, setExactMatch] = useState(false);

  const [exactBrand, setExactBrand] = useState({
    // Check which brand has exact number match witch search
    dmc: false,
    anchor: false,
    ariadna: false,
  });

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = () => {
    // Add listener on search change
    searchListener.on("searching", (data) => {
      const searchDetails = {
        dmc: data.brand === brandNames.upperCase.dmc,
        isDMC: dmc.includes(data.number),
        anchor: data.brand === brandNames.upperCase.anchor,
        isAnchor: anchor.includes(data.number),
        ariadna: data.brand === brandNames.upperCase.ariadna,
        isAriadna: ariadna.includes(data.number),
        noBrand: data.brand === "",
      };

      // Check if there are any matches
      const anyBrand =
        searchDetails.isDMC ||
        searchDetails.isAnchor ||
        searchDetails.isAriadna;

      // Check if there are any matches brand or no brand
      if (
        (searchDetails.noBrand && anyBrand) ||
        (searchDetails.isDMC && searchDetails.dmc) ||
        (searchDetails.isAnchor && searchDetails.anchor) ||
        (searchDetails.isAriadna && searchDetails.ariadna)
      ) {
        setSearchMatch(true);
      } else {
        setSearchMatch(false);
      }

      setExactBrand({
        dmc: data.number === dmc,
        anchor: data.number === anchor,
        ariadna: data.number === ariadna,
      });

      setExactMatch(
        data.number === dmc || data.number === anchor || data.number === ariadna
      );
    });
  };

  return (
    <ColourWrapper accurate={exactMatch} print={searchMatch}>
      <ColourBG>
        <ColourImage rgb={rgb} />
        <ColourInfoWrapper>
          {Object.values(brandColours).map((brand, index) => {
            return (
              <ColourInfo
                key={`${brand.codeName}-${index}`}
                brand={brand.label}
                number={brand.number}
                accurate={exactMatch && exactBrand[brand.codeName]}
              />
            );
          })}
        </ColourInfoWrapper>
      </ColourBG>
    </ColourWrapper>
  );
};

export default Colour;
