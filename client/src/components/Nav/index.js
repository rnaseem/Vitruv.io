import React from "react";
import Login from "../Login";
import SignUp from "../SignUp";
import UserContext from "../../context/UserContext";
import "./style.css";
const $ = window.$;

class Nav extends React.Component {
    state = {

    }

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


    render() {
        return (
            <UserContext.Consumer>
                {context => {
                    return (!context.user) ?
                        (
                            <>
                                <nav className="navbar navbar-expand-lg navbar-light">
                                    <a className="navbar-brand" id="loginLink" href="#" onClick={this.handleLoginShow}>Login</a>
                                    <a className="navbar-brand" id="signUpLink" href="#" onClick={this.handleSignUpShow}>Sign Up</a>
                                </nav>
                                <Login />
                                <SignUp />
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
export default Nav;

