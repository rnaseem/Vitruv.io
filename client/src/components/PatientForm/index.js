import React from "react";
import pdf from '../utils/pdf';
import axios from "axios";
import FilledForm from "../FilledForm";
import Pdf from "react-to-pdf";
import Button from "react-bootstrap/Button";
const ref = React.createRef();
let completeForm;





class PatientForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1,
            email: '',
            name: '',
            dob: '',
            age: '',
            otherProblems: '',
            lastPsyProvider: '',
            lastPsyVisit: '',
            psyMeds: '',
            psySuicide: '',
            erCount: '',
            erLastTime: '',
            formProps: null

        }
    }
    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        let user = {
            email: this.state.email,
            name: this.state.name,
            dob: this.state.dob,
            age: this.state.age,
            otherProblems: this.state.otherProblems,
            lastPsyProvider: this.state.lastPsyProvider,
            lastPsyVisit: this.state.lastPsyVisit,
            psyMeds: this.state.psyMeds,
            psySuicide: this.state.psySuicide,
            erCount: this.state.erCount,
            erLastTime: this.state.erLastTime
        }

        this.setState(
            this.state.formProps = user
        )

        axios.post("/api/addform", user)
            .then(
                console.log("fired")
            )

        completeForm = pdf.regularForm(user)
        console.log("Complete Form: ", completeForm)
    }

    _next = () => {
        let currentPage = this.state.currentPage
        currentPage = currentPage >= 3 ? 4 : currentPage + 1
        this.setState({
            currentPage: currentPage
        })
    }

    _prev = () => {
        let currentPage = this.state.currentPage
        currentPage = currentPage <= 1 ? 1 : currentPage - 1
        this.setState({
            currentPage: currentPage
        })
    }

    // the functions for our button
    previousButton() {
        let currentPage = this.state.currentPage;
        if (currentPage !== 1) {
            return (
                <button
                    className="btn btn-secondary"
                    type="button" onClick={this._prev}>
                    Previous
          </button>
            )
        }
        return null;
    }

    nextButton() {
        let currentPage = this.state.currentPage;
        if (currentPage < 4) {
            return (
                <button
                    className="btn btn-primary float-right"
                    type="button" onClick={this._next}>
                    Next
          </button>
            )
        }
        return null;
    }

    render() {
        let formProps = this.state.formProps
        return (
            <>
                <React.Fragment>
                    <h1><strong>Virtruvio Mock Patient Form</strong></h1>
                    <p>Page {this.state.currentPage} </p>

                    <form onSubmit={this.handleSubmit}>

                        <GeneralInfo
                            currentPage={this.state.currentPage}
                            handleChange={this.handleChange}
                            email={this.state.email}
                            name={this.state.name}
                            dob={this.state.dob}
                            age={this.state.age}
                        />

                        <ProblemsPage
                            currentPage={this.state.currentPage}
                            handleChange={this.handleChange}
                            otherProblems={this.state.otherProblems}
                        />

                        <PsyInfo
                            currentPage={this.state.currentPage}
                            handleChange={this.handleChange}
                            lastPsyProvider={this.state.lastPsyProvider}
                            lastPsyVisit={this.state.lastPsyVisit}
                            psyMeds={this.state.psyMeds}
                            psySuicide={this.state.psySuicide}
                        />

                        <PsyInfoContinued
                            currentPage={this.state.currentPage}
                            handleChange={this.handleChange}
                            erCount={this.state.erCount}
                            erLastTime={this.state.erLastTime}
                        />

                        {this.previousButton()}
                        {this.nextButton()}

                    </form>

                </React.Fragment>
                {completeForm}
            </>
        );
    }
}

function GeneralInfo(props) {
    if (props.currentPage !== 1) {
        return null
    }
    return (
        <div className="form-group">
            <h3>General Information</h3>
            <label htmlFor="email">Email Address</label>
            <input
                className="form-control"
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email address"
                value={props.email}
                onChange={props.handleChange}
            />
            <label htmlFor="patientName">name</label>
            <input
                className="form-control"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={props.name}
                onChange={props.handleChange}
            />
            <label htmlFor="dob">Date of Birth</label>
            <input
                className="form-control"
                id="dob"
                name="dob"
                type="text"
                placeholder="(mm/dd/yyyy)"
                value={props.dob}
                onChange={props.handleChange}
            />
            <label htmlFor="age">Enter your Age</label>
            <input
                className="form-control"
                id="age"
                name="age"
                type="number"
                placeholder="age"
                value={props.age}
                onChange={props.handleChange}
            />
        </div>
    );
}

function ProblemsPage(props) {
    if (props.currentPage !== 2) {
        return null
    }
    return (
        <div className="form-group">
            <label htmlFor="otherProblems">Current Symptoms</label>
            <input
                className="form-control"
                id="otherProblems"
                name="otherProblems"
                type="text"
                placeholder="problems"
                value={props.problems}
                onChange={props.handleChange}
            />
        </div>
    );
}

function PsyInfo(props) {
    if (props.currentPage !== 3) {
        return null
    }
    return (
        <div className="form-group">
            {/* checkbox, if yes, answer question */}
            <label htmlFor="lastPsyProvider">Name of last psychiatric provider?</label>
            <input
                className="form-control"
                id="lastPsyProvider"
                name="lastPsyProvider"
                type="text"
                placeholder="Enter psyProvider"
                value={props.lastPsyProvider}
                onChange={props.handleChange}
            />
            {/* checkbox, if yes, answer question */}
            <label htmlFor="lastPsyVisit">Last visit to psychiatric provider?</label>
            <input
                className="form-control"
                id="lastPsyVisit"
                name="lastPsyVisit"
                type="text"
                placeholder="Enter lastPsyVisit"
                value={props.lastPsyVisit}
                onChange={props.handleChange}
            />
            <label htmlFor="psyMeds">Current Medication:</label>
            <input
                className="form-control"
                id="psyMeds"
                name="psyMeds"
                type="psyMeds"
                placeholder="Enter psyMeds"
                value={props.psyMeds}
                onChange={props.handleChange}
            />
            <label htmlFor="psySuicide">Have you ever attempted suicide?</label>
            <input
                className="form-control"
                id="psySuicide"
                name="psySuicide"
                type="psySuicide"
                placeholder="Enter psySuicide"
                value={props.psySuicide}
                onChange={props.handleChange}
            />
        </div>
    );
}

function PsyInfoContinued(props) {
    if (props.currentPage !== 4) {
        return null
    }
    return (
        <React.Fragment>
            <div className="form-group">
                <label htmlFor="erCount">How many visits have you had to the emergency room?</label>
                <input
                    className="form-control"
                    id="erCount"
                    name="erCount"
                    type="erCount"
                    placeholder="Enter erCount"
                    value={props.erCount}
                    onChange={props.handleChange}
                />
                <label htmlFor="erLastTime">When was the last time in the ER?</label>
                <input
                    className="form-control"
                    id="erLastTime"
                    name="erLastTime"
                    type="erLastTime"
                    placeholder="Enter erLastTime"
                    value={props.erLastTime}
                    onChange={props.handleChange}
                />
            </div>
            <button className="btn btn-success btn-block">Submit</button>
        </React.Fragment>

    );
}

export default PatientForm;

            // //family psychiatric History
            // grandparent: [],
            // mother: [],
            // father: [],
            // sibling: [],
            // child: [],
            // other: [],
            // //medical and surgical history
            // healthConditions: [],
            // surgeries: [],
            // medications: '',
            // allergyMeds: '',
            // //social and developmental
            // grewUp: '',
            // raisedYou: '',
            // education: [],
            // abuse: 'no',
            // maritalStatus: '',
            // liveWith: '',