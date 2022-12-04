import { render } from "react-dom";
import Header from "./components/header/header";
import {GlobalStyles} from "./App.styled";
import ColourList from "./components/colour-list/colour-list";

const App = () => {
    return (
        <div>
            <GlobalStyles/>
            <Header/>
            <ColourList/>
        </div>
    );
};

render(<App />, document.getElementById("root"));
