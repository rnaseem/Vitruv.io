import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function FilledForm(props) {
    console.log("Filled form props", props)
        return (
            <Container>
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
        )
    }

export default FilledForm;