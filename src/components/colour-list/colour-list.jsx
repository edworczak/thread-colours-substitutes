import { ColourList } from "./colour-list.styled";
import Colour from "../colour/colour";
import colours from "../../data/colours";

const Header = () => {
    return (
        <ColourList>
            {Object.values(colours).map((colour, index)=>{
                return <Colour
                    key={index}
                    rgb={colour.rgb}
                    dmc={colour.dmc}
                    anchor={colour.anchor}
                    ariadna={colour.ariadna}
                />
            })}
        </ColourList>
    );
};

export default Header;