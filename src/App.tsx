import * as React from "react";
import { GlobalStyle } from "./theme/globalStyle";
import { Description } from "ui/Description";
import { Icon } from "ui/Icon";
import { IconTypes } from "./helpers/enum";

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
