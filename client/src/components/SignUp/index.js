import React from "react";
import axios from "axios";
import "./style.css";
import Button from "react-bootstrap/Button";
// import UserContext from "./context/UserContext";


class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fullName: "",
            email: "",
            password: "",
            passwordConfirm: ""
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();
        const { password, passwordConfirm } = this.state;
        if (password !== passwordConfirm) {
            this.setState({
                password: null
            })
        } else {
            this.setState({
                fullName: "",
                email: "",
                password: "",
                passwordConfirm: ""
            })
            let user = {
                fullName: this.state.fullName,
                email: this.state.email,
                password: this.state.password
            }
            console.log(user)
            console.log(this.state);

            axios.post("/api/signup", user)
                .then(data => {
                    console.log(data);
                }).catch(err => {
                    console.log("Error", err.message)
                })
        }
    }
    
    render() {
        return (
            <>
                <div className="modal" role="dialog" id="signUpModal">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title"><strong>Create an Account</strong></h5>
                                <Button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </Button>
                            </div>
                            <div className="modal-body">
                                <form id="signUpForm" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="fullName"><strong>Full Name</strong></label>
                                        <input
                                            name="fullName"
                                            type="input"
                                            className="form-control"
                                            id="fullName"
                                            placeholder="Enter Full Name"
                                            value={this.state.fullName}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="signUpEmail"><strong>Email address</strong></label>
                                        <input
                                            name="email"
                                            type="email"
                                            className="form-control"
                                            id="signUpEmail"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter email"
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="signUpPassword"><strong>Password</strong></label>
                                        <input
                                            name="password"
                                            type="password"
                                            className="form-control"
                                            id="signUpPassword"
                                            placeholder="Password"
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="passwordConfirm"><strong>Retype Password</strong></label>
                                        <input
                                            name="passwordConfirm"
                                            type="password"
                                            className="form-control"
                                            id="passwordConfirm"
                                            placeholder="Retype Password"
                                            value={this.state.passwordConfirm}
                                            onChange={this.handleChange} />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
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
export default SignUp;