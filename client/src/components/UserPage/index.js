import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
                </Row>
                <Form className="form-group">
                    <label for="exampleFormControlTextarea1">Personal Notes</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <br/>
                    <Button type="submit" className="user-btn" id="submitNote">Save Note</Button>
                </Form>
                <br/>
                <div>
                    <div id="savedNotes"></div>
                </div>
                <div>
                <Button className="user-btn" >send to form component</Button>
                </div>
            </Container>
        )
    }
}

export default UserPage