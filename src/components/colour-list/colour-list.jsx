import { ColourListWrapper } from "./colour-list.styled";
import Colour from "../colour/colour";
import colours from "../../data/colours";

const ColourList = () => {
  return (
    <ColourListWrapper>
      {Object.values(colours).map((colour, index) => {
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
