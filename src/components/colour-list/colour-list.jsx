import { ColourListWrapper } from "./colour-list.styled";
import Colour from "../colour/colour";
import colours from "../../data/colours";

const ColourList = () => {
  return (
    <ColourListWrapper>
      {Object.values(colours).map((colour, index) => {
        return <Colour key={`dmc${colour.dmc}-${index}`} colour={colour} />;
      })}
    </ColourListWrapper>
  );
};

export default ColourList;
