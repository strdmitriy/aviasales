import * as React from "react";
import { GlobalStyle } from "./theme/globalStyle";
import { Aviasales } from "components/aviasales";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Aviasales />
        <GlobalStyle />
      </React.Fragment>
    );
  }
}

export default App;
