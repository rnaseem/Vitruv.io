import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PatientForm from "../PatientForm";


class UserPage extends React.Component {

    render() {
        return (
            <Container className="container" id="userContainer">
                    <Row>
                    <h1>User Page</h1>
                    </Row>
                    <i>Answer the questions below to get a patient form.</i>
                <PatientForm />
            </Container>
        )
    }
}

export default UserPage