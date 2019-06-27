import React from "react";
import Login from "../Login";
import SignUp from "../SignUp";
import UserContext from "../../context/UserContext";
import Nav from "react-bootstrap/Nav";
import "./style.css";
const $ = window.$;
// import Modal from "react-bootstrap/Modal";

class NavBar extends React.Component {
    state = {
        show: false
    }
    handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }
    // handleSignUpShow(e) {
    //     e.preventDefault();
    //     $("#signUpModal").modal("show");
    // }
    // handleSignUpClose() {
    //     $("#loginModal").modal("hide");
    // }

    // handleLoginShow(e) {
    //     e.preventDefault();
    //     $("#loginModal").modal("show");
    // }
    // handleLoginClose() {
    //     $("#loginModal").modal("hide");
    // }
    render() {
        return (
            <UserContext.Consumer>
                {context => {
                    return (!context.user) ?
                        (
                            <>
                                <Nav className="navbar navbar-expand-lg navbar-light">
                                    <a className="navbar-brand" id="loginLink" href="#" onClick={this.handleShow}>Login</a>
                                    <a className="navbar-brand" id="signUpLink" href="#" onClick={this.handleShow}>Sign Up</a>
                                </Nav>
                                <Login show={this.state.show}/>
                                <SignUp show={this.state.show}/>
                            </>
                        )
                        :
                        (
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <h2>Welcome, {context.user.email}</h2>
                            </nav>
                        )
                }}
            </UserContext.Consumer>
        );
    }
};
export default NavBar;

