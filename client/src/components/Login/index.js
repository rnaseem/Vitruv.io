import React from "react";
import UserContext from "../../context/UserContext";
import Auth from "../utils/Auth";
import {withRouter} from "react-router-dom";


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
        e.preventDefault();
        const { username, password } = this.state;
        if (username && password) {
            Auth.logIn(username, password, (res) => {
                this.context.setUser(res);
                this.props.history.push("/");
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
                                <h5 className="modal-title">Login</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form id="loginForm" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="loginEmail" 
                                       >Email address</label>
                                        <input 
                                        type="email" 
                                        className="form-control" 
                                        id="loginEmail" 
                                        aria-describedby="emailHelp" 
                                        placeholder="Enter email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="loginPassword" 
                                        value={this.state.password}
                                        onChange={this.handleChange}>Password</label>
                                        <input type="password" className="form-control" id="loginPassword" placeholder="Password" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(Login);