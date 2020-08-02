import * as React from "react";
import { GlobalStyle } from "./theme/globalStyle";
import { Description } from "ui/Description";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Description>My React App!</Description>
        <GlobalStyle />
      </React.Fragment>
    );
  }
}

export default App;
