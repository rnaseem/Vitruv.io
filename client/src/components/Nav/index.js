import React from "react";
import Login from "../Login";
import SignUp from "../SignUp";
import "./style.css";
const $ = window.$;


class Nav extends React.Component {

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
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" id="loginLink" href="" onClick={this.handleLoginShow}>Login</a>
                    <a className="navbar-brand" id="signUpLink" href="" onClick={this.handleSignUpShow}>Sign Up</a>
                </nav>
                <Login />
                <SignUp />
            </>
        )
    }
}
export default Nav;

