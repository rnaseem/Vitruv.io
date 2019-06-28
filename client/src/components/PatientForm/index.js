import React from "react";

class PatientForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1,
            //info
            name: '',
            dob: '',
            age: '',
            //why here
            problems: [],
            otherProblems: '',
            //psychiatric info
            lastPsyProvider: '',
            lastPsyVisit: '',
            psyMeds: '',
            psySuicide: '',
            //psychiatric info continued
            erCount: '',
            erLastTime: '',
            psySymptoms: []

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
        const {
            name,
            dob,
            // problems,
            otherProblems,
            lastPsyProvider,
            lastPsyVisit,
            psyMeds,
            psySuicide,
            erCount,
            erLastTime,
            // psySymptoms
        } = this.state
        console.log(`name: ${name},
        dob: ${dob},
        otherProblems: ${otherProblems}
        lastPsyProvider: ${lastPsyProvider},
            lastPsyVisit: ${lastPsyVisit},
            psyMeds: ${psyMeds},
            psySuicide: ${psySuicide},
            erCount: ${erCount},
            erLastTime: ${erLastTime}`)
        //pdf thing here
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

    /*
    * the functions for our button
    */
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
        return (
            <React.Fragment>
                <h1><strong>Virtruvio Mock Patient Form</strong></h1>
                <p>Page {this.state.currentPage} </p>

                <form onSubmit={this.handleSubmit}>
                    {/* 
            render the form steps and pass required props in
          */}
                    <GeneralInfo
                        currentPage={this.state.currentPage}
                        handleChange={this.handleChange}
                        patientName={this.state.name}
                        dob={this.state.dob}
                        age={this.state.age}
                    />
                    <ProblemsPage
                        currentPage={this.state.currentPage}
                        handleChange={this.handleChange}
                        // problems={this.state.problems}
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
                    // psySymptoms={this.state.psySymptoms}
                    />
                    {this.previousButton()}
                    {this.nextButton()}

                </form>
            </React.Fragment>
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
            <label htmlFor="patientName">name</label>
            <input
                className="form-control"
                id="name"
                name="patientName"
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
            <label htmlFor="otherProblems">otherProblems</label>
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
                <label htmlFor="lastPsyProvider">lastPsyProvider</label>
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
                <label htmlFor="lastPsyVisit">lastPsyVisit</label>
                <input
                    className="form-control"
                    id="lastPsyVisit"
                    name="lastPsyVisit"
                    type="text"
                    placeholder="Enter lastPsyVisit"
                    value={props.lastPsyVisit}
                    onChange={props.handleChange}
                />
                <label htmlFor="psyMeds">psyMeds</label>
                <input
                    className="form-control"
                    id="psyMeds"
                    name="psyMeds"
                    type="psyMeds"
                    placeholder="Enter psyMeds"
                    value={props.psyMeds}
                    onChange={props.handleChange}
                />
                <label htmlFor="psySuicide">psySuicide</label>
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
                <label htmlFor="erCount">erCount</label>
                <input
                    className="form-control"
                    id="erCount"
                    name="erCount"
                    type="erCount"
                    placeholder="Enter erCount"
                    value={props.erCount}
                    onChange={props.handleChange}
                />
                <label htmlFor="erLastTime">erLastTime</label>
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