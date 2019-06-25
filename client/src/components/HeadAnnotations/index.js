import React from "react"
import "./style.css"
import { Annotation, ConnectorElbow, ConnectorEndDot, Note } from "react-annotation";

class HeadAnnotations extends React.Component {
  
    state = { 
  }

  annotationClick = () => {
   let text = document.querySelector("tspan");
   
  }




  render() {
    return (

<div className="content1">
<svg id="eyes" height={500} width={1500}>
  <Annotation
    x={150}
    y={170}  
    dy={117}
    dx={162}
    color={"#765038"}
    title={"Eyes"}
    // label={"Longer text to show text wrapping"}
    className="show-bg"
    events={{
        onClick: (props, state, event) => {
            console.log(props, state, event)
        }
      }}    
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
</div>

// #765038

)
  }
}

export default HeadAnnotations

