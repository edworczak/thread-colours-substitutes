import { render } from "react-dom";

import { GlobalStyles } from "./App.styled";
import ColourList from "./components/colour-list/colour-list";
import Header from "./components/header/header";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <ColourList />
    </div>
  );
};

render(<App />, document.getElementById("root"));
