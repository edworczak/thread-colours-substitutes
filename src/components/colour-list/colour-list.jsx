import colours from "../../data/colours";
import Colour from "../colour/colour";
import { ColourListWrapper } from "./colour-list.styled";

const ColourList = () => {
  const orderedColours = Object.values(colours);

  orderedColours.sort(function (colour1, colour2) {
    if (colour1.order < colour2.order) return -1;
    if (colour1.order > colour2.order) return 1;
    return 0;
  });

  return (
    <ColourListWrapper>
      {orderedColours.map((colour) => {
        return (
          <Colour key={`dmc${colour.dmc}-${colour.order}`} colour={colour} />
        );
      })}
    </ColourListWrapper>
  );
};

export default ColourList;
