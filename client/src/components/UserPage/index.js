import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PatientForm from "../PatientForm";


class UserPage extends React.Component {

    /*  1. grabbing the userData
        2. saving notes to user
        3. "create a general patient form" loads createPatientForm component. questions to go through
        4. mount answers onto table document-style component
        5. return document converted into pdf
    */
   
    render() {
        return (
            <Container className="container" id="userContainer">
                <Row className="row">
                    <h1>User Page</h1>
                    <i>Answer the questions below to get a patient form.</i>
                </Row>
                    <PatientForm />
            </Container>
        )
    }
}

export default UserPage