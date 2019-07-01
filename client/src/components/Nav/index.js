import React from "react";
import Login from "../Login";
import SignUp from "../SignUp";
import UserContext from "../../context/UserContext";
import Nav from "react-bootstrap/Nav";
import "./style.css";
import { Link } from "react-router-dom";
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
                                <Nav className="navbar navbar-expand-lg navbar-light">
                                <h2 className="ml3">Vitruv.io</h2>
                                    <a className="navbar-brand" id="loginLink" href="#" onClick={this.handleLoginShow}>Login</a>
                                    <a className="navbar-brand" id="signUpLink" href="#" onClick={this.handleSignUpShow}>Sign Up</a>
                                    <Link to="/VitruvianWoman" className={window.location.pathname === "/VitruvianWoman" ? "nav-link active" : "nav-link"}> Woman</Link>
                                    <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}> Man</Link>
                                </Nav>
                                <Login />
                                <SignUp />
                            </>
                        )
                        :
                        (
                            <>
                                <Nav className="navbar navbar-expand-lg navbar-light">
                                <h2 className="ml3">Vitruv.io</h2>
                                    <h2 style={{ fontSize: 20 }}>Welcome, {context.user.email}</h2>
                                    <a className="navbar-brand" id="loginLink" href="/user" onClick={this.handleLoginShow}>Your Page</a>
                                    <a className="navbar-brand" id="loginLink" href="/logout" onClick={this.handleLoginShow}>Logout</a>
                                    <Link to="/VitruvianWoman" className={window.location.pathname === "/VitruvianWoman" ? "nav-link active" : "nav-link"}> Woman</Link>
                                    <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}> Man</Link>
                                    
                                </Nav>

                            </>
                        )
                }}
            </UserContext.Consumer>
        );
    }
};
export default NavBar;

