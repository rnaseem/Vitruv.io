import React from "react";

class SignUp extends React.Component {

    
    render() {
        return (
            <>
                <div className="modal" tabindex="-1" role="dialog" id="signUpModal">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Creat an Account</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form id="signUpForm">
                                <div className="form-group">
                                        <label for="fullName">Full Name</label>
                                        <input type="input" className="form-control" id="fullName" placeholder="Enter Full Name" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Retype Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Retype Password" />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary" for="loginForm">Sign Up</button>
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