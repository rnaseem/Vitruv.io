import React from "react";
import Login from "../Login";
import SignUp from "../SignUp";
import UserContext from "../../context/UserContext";
import Nav from "react-bootstrap/Nav";
import "./style.css";
const $ = window.$;
// import Modal from "react-bootstrap/Modal";

class NavBar extends React.Component {

    handleSignUpShow(e) {
        e.preventDefault();
        $("#signUpModal").modal("show");
    }
    handleSignUpClose() {
        $("#loginModal").modal("hide");
    }

    handleLoginShow(e) {
        e.preventDefault();
        $("#loginModal").modal("show");
    }
    handleLoginClose() {
        $("#loginModal").modal("hide");
    }
    render(props) {
        return (
            <UserContext.Consumer>
                {context => {
                    return (!context.user) ?
                        (
                            <>
                                <Nav className="navbar navbar-expand-lg navbar-light">
                                    <a className="navbar-brand" id="loginLink" href="#" onClick={this.handleLoginShow}>Login</a>
                                    <a className="navbar-brand" id="signUpLink" href="#" onClick={this.handleSignUpShow}>Sign Up</a>
                                </Nav>
                                <Login />
                                <SignUp />
                            </>
                        )
                        :
                        (
                            <Nav className="navbar navbar-expand-lg navbar-light">
                                <h6>Welcome, {context.user.email}</h6>
                            </Nav>
                        )
                }}
            </UserContext.Consumer>
        );
    }
};
export default NavBar;

