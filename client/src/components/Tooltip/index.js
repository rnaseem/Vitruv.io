import React from "react";
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

class Tooltip extends React.Component {
render(){
    return(
        <ButtonToolbar>
  {['top', 'right', 'bottom', 'left'].map(placement => (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={
        <Tooltip id={`tooltip-${placement}`}>
          Hover over me on <strong>{placement}</strong>.
        </Tooltip>
      }
    >
      <Button variant="secondary">Hover over this</Button>
    </OverlayTrigger>
  ))}
</ButtonToolbar>

    )

}
}

export default Tooltip