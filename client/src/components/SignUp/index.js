import React from "react";

class SignUp extends React.Component {

    
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
                                <form id="signUpForm">
                                <div className="form-group">
                                        <label htmlFor="fullName">Full Name</label>
                                        <input type="input" className="form-control" id="fullName" placeholder="Enter Full Name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="signUpEmail">Email address</label>
                                        <input type="email" className="form-control" id="signUpEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="signUpPassword">Password</label>
                                        <input type="password" className="form-control" id="signUpPassword" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="passwordConfirm">Retype Password</label>
                                        <input type="password" className="form-control" id="passwordConfirm" placeholder="Retype Password" />
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