import {ColourWrapper, ColourImage, ColourInfoWrapper, ColourBG} from "./colour.styled";
import ColourInfo from "../colour-info/colour-info";
import pl from "../../data/pl";

const Colour = ({ rgb, dmc, anchor, ariadna }) => {
  return (
    <ColourWrapper data-dmc={dmc} data-anchor={anchor} data-ariadna={ariadna}>
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
