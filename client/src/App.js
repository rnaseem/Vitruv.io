import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import VitruviAnimation from "./components/VitruviAnimation";
import UserPage from "./components/UserPage";
import UserContext from "./context/UserContext";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Nav from "./components/Nav";
import PatientForm from "./components/PatientForm";
import VitruvianWoman from "./components/VitruvianWoman"

class App extends Component {
  static contextType = UserContext;
  state = {
    user: null
  }

  setUser = (user) => {
    this.setState({ user: user });
  }

  render() {
    const { user } = this.state;
    const setUser = this.setUser;
    return (
      <Router>
        <UserContext.Provider value={{ setUser, user }}>
          <Nav />
          <Switch>
            <Route exact path='/form' component={PatientForm} />
            <Route exact path="/" component={VitruviAnimation} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route exact path="/VitruvianWoman" component={VitruvianWoman} />
            <Route exact path="/user" component={UserPage} />
          </Switch>
        </UserContext.Provider>
      </Router>
    );
  };
};

export default App;