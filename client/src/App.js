import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import VitruviAnimation from "./components/VitruviAnimation";
import UserPage from "./components/UserPage";
import UserContext from "./context/UserContext";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Nav from "./components/Nav";


class App extends Component {

  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route path="/" component={VitruviAnimation} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <ProtectedRoute exact path="/user" component={UserPage.js} />
        </Switch>
      </Router>
    );
  }
}

export default App;


// import { Annotation, ConnectorElbow, ConnectorEndDot, Note } from "react-annotation";
// <>
// <VitruviAnimation />
// <svg height={500} width={500}>
//   <Annotation
//     x={150}
//     y={170}  
//     dy={117}
//     dx={162}
//     color={"#765038"}
//     title={"??????????????"}
//     label={"Longer text to show text wrapping"}
//     className="show-bg"
//   >
//     <ConnectorElbow >
//       <ConnectorEndDot />
//     </ConnectorElbow >
//     <Note
//       align={"middle"}
//       orientation={"leftRight"}
//       bgPadding={20}
//       padding={15}
//       titleColor={"#765038"}
//       lineType={"vertical"} />
//   </Annotation>
// </svg>
// </>