import React from "react";

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
    handleSubmit(e) {
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
        }
    }
    render() {
        return (
            <>
                <div className="modal" role="dialog" id="signUpModal">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Creat an Account</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form id="signUpForm" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="fullName">Full Name</label>
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
                                        <label htmlFor="signUpEmail">Email address</label>
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
                                        <label htmlFor="signUpPassword">Password</label>
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
                                        <label htmlFor="passwordConfirm">Retype Password</label>
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