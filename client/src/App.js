import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import VitruviAnimation from "./components/VitruviAnimation";
import UserPage from "./components/UserPage";
import UserContext from "./context/UserContext";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Nav from "./components/Nav";


class App extends Component {
  state = {
    user: null
  }

  setUser = (user) => {
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    const setUser = this.setUser;
    return (
      <Router>
        <Nav />
        {console.log(user)}
        <Switch>
          <Route path="/" component={VitruviAnimation} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <UserContext.Provider value={{ setUser, user }}>
            <ProtectedRoute exact path="/user" component={UserPage} />
          </UserContext.Provider>
        </Switch>
      </Router>
    );
  };
};

export default App;