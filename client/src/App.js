import React, { Component } from "react";
import VitruviAnimation from "./components/VitruviAnimation";
import { Annotation, ConnectorElbow, ConnectorEndDot, Note } from "react-annotation";

class App extends Component {
  render() {
    return (
      <>
        <VitruviAnimation />
        <svg height={500} width={500}>
          <Annotation
            x={150}
            y={170}
            dy={117}
            dx={162}
            color={"#765038"}
            title={"??????????????"}
            label={"Longer text to show text wrapping"}
            className="show-bg"
          >
            <ConnectorElbow >
              <ConnectorEndDot />
            </ConnectorElbow >
            <Note
              align={"middle"}
              orientation={"leftRight"}
              bgPadding={20}
              padding={15}
              titleColor={"#765038"}
              lineType={"vertical"} />
          </Annotation>
        </svg>
      </>
    );
  }
}

export default App;
