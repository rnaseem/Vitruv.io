import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Pdf from "react-to-pdf";
import Axios from 'axios';
const ref = React.createRef();

// function handleDelete(e, email) {
//     e.preventDefault();
//     Axios.post("api/deleteform", email).then(
//         console.log("delete fired")
//     )
// }

function FilledForm(props) {
    console.log("Filled form props", props)
        return (
            <>
            <Container ref={ref}>
                <Row>
                    <h1>Virtruv.io Mock Patient Form</h1>
                    <i>This is not an official medical document</i>
                </Row>
                <Row>
                    <h3>General Information</h3>
                    <ul>
                        <li>Patient's Name: {props.name}</li>
                        <li>Date of Birth: {props.dob}</li>
                        <li>Age: {props.age}</li>
                    </ul>
                </Row>
                <Row>
                    <h3>problems</h3>
                    <ul>
                        <li>Problems: {props.otherProblems}</li>
                    </ul>
                </Row>
                <Row>
                    <h3>Psychiatric History</h3>
                    <ul>
                        <li>Last Psychiatric Provider: {props.lastPsyProvider}</li>
                        <li>Last Psychiatric visit: {props.lastPsyVisit}</li>
                        <li>Psychiatric Medication: {props.psyMeds}</li>
                        <li>Suicide Attempts: {props.psySuicide}</li>
                    </ul>
                </Row>
                <Row>
                    <h3>Psychiatric Continued</h3>
                    <ul>
                        <li>Amount of Emergency Room Visits: {props.erCount}</li>
                        <li>Amount of Emergency Room Visits: {props.erLastTime}</li>
                    </ul>
                </Row>
            </Container>
                <Pdf targetRef={ref} filename="form-complete.pdf" x={.5} y={.5}>
                    {({ toPdf }) => <Button onClick={toPdf}>Generate Pdf</Button>}
                </Pdf>
                <div>
                    <br/>
                    <Button onClick={e=>{this.handleDelete(props.email)}}>Delete Patient Form</Button>
                </div>
            </>
        )
    }

export default FilledForm;