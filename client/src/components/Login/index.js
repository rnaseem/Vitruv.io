import React from "react";
import UserContext from "../../context/UserContext";
import Auth from "../utils/Auth";
import {withRouter} from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
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
                axios.post("/api/authenticate",  user)
                .then(data=> {
                    console.log(data)

                }).catch(err=>{
                    console.log("Err", err.message)
                })
            });
        }
    }

    render(props) {
        return (
            <>
                <Modal className="modal" role="dialog" id="loginModal" show={this.props.show}>
                    <Modal.Dialog className="modal-dialog" role="document">
                        <Modal.Content className="modal-content">
                            <Modal.Header className="modal-header">
                                <h5 className="modal-title">Login</h5>
                                <Button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </Button>
                            </Modal.Header>
                            <Modal.Body className="modal-body">
                                <Form id="loginForm" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="loginEmail" 
                                       >Email address</label>
                                        <input 
                                        name="email"
                                        type="email" 
                                        className="form-control" 
                                        id="loginEmail" 
                                        aria-describedby="emailHelp" 
                                        placeholder="Enter email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        />
                                    </div>
                                    <Form.Group className="form-group">
                                        <label htmlFor="loginPassword"
                                        >Password</label>
                                        <input 
                                        type="password" 
                                        name="password" 
                                        className="form-control" 
                                        id="loginPassword" 
                                        placeholder="Password" 
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                    <Button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Login</Button>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer className="modal-footer">
                                <Button type="button" className="btn btn-secondary" data-dismiss="modal">Close</Button>
                            </Modal.Footer>
                        </Modal.Content>
                    </Modal.Dialog>
                </Modal>
            </>
        )
    }
}

export default withRouter(Login);