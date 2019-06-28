import React from "react";
import UserContext from "../../context/UserContext";
import Auth from "../utils/Auth";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./style.css";
// import UserContext from "./context/UserContext";
import UserPage from "../UserPage";


class Login extends React.Component {
    static contextType = UserContext;

    state = {
        email: "",
        password: ""
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        console.log('submit');
        e.preventDefault();
        const { email, password } = this.state;
        console.log(email, password)
        if (email && password) {
            console.log("inside")
            Auth.logIn(email, password, (res) => {
                let user = {
                    email,
                    password
                }
                console.log(user)
                this.context.setUser(res);
                // this.props.history.push("/");
                axios.post("/api/authenticate", user)
                    .then(data => {
                        console.log(data)

                    }).catch(err => {
                        console.log("Err", err.message)
                    })
            });
        }
    }

    render() {
        return (
            <>
                <div className="modal" role="dialog" id="loginModal">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title"><strong>Login</strong></h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form id="loginForm" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="loginEmail"
                                        ><strong>Email address</strong></label>
                                        <input
                                            name="email"
                                            type="email"
                                            className="form-control"
                                            id="loginEmail"
                                            aria-describedby="emailHelp" s
                                            placeholder="Enter email"
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="loginPassword"
                                        ><strong>Password</strong></label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            id="loginPassword"
                                            placeholder="Password"
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Login</button>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(Login);

