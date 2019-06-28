import React from "react";
import Login from "../Login";
import SignUp from "../SignUp";
import UserContext from "../../context/UserContext";
import "./style.css";
import { Link } from "react-router-dom";
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
        $("#mimodal").removeClass('fade').modal('hide')
        console.log("fired")
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
                                    <Link to="/VitruvianWoman" className={window.location.pathname === "/VitruvianWoman" ? "nav-link active" : "nav-link"}> Female</Link>
                                    <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}> Male</Link>
                                </nav>
                                <Login />
                                <SignUp />
                            </>
                        )
                        :
                        (
                            <>
                                <nav className="navbar navbar-expand-lg navbar-light">
                                    <h2 style={{ fontSize: 20 }}>Welcome, {context.user.email}</h2>
                                    <a className="navbar-brand" id="loginLink" href="/user" onClick={this.handleLoginShow}>Your Page</a>
                                    <a className="navbar-brand" id="loginLink" href="/logout" onClick={this.handleLoginShow}>Logout</a>
                                    <Link to="/VitruvianWoman" id="women" className={window.location.pathname === "/VitruvianWoman" ? "nav-link active" : "nav-link"}>Female</Link>
                                    <Link to="/" id="man" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>Male</Link>

                                </nav>

                            </>
                        )
                }}
            </UserContext.Consumer>
        );
    }
};
export default Nav;

