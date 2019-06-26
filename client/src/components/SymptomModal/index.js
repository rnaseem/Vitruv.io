import React from "react";
import Checkbox from "../Checkbox";
import sympts from "./symptoms.json"
import axios from "axios";

// bodyData.data[0].head.symptoms[element]

let bodyData = {};
let arrOfHead = [];

axios.get("/api/body").then((res) => {
    bodyData = res;
    for (let i = 0; i < bodyData.data[0].head.symptoms.length; i++) {
        arrOfHead.push(bodyData.data[0].head.symptoms[i].name)
    }

})


const symptoms = sympts.map(function (sympt) {
    let symptID = sympt.id
    return symptID
});


class Symptom extends React.Component {

    state = {
        checkboxes: arrOfHead.reduce(
            (arrOfHead, symptom) => ({
                ...arrOfHead,
                [symptom]: false
            }),
            {}
        ),
        bodyData: {}
    };


    selectAllCheckboxes = isSelected => {
        Object.keys(this.state.checkboxes).forEach(checkbox => {
            this.setState(prevState => ({
                checkboxes: {
                    ...prevState.checkboxes,
                    [checkbox]: isSelected
                }
            }));
        });
    };


    handleCheckboxChange = event => {
        const { name } = event.target;
        this.setState(prevState => ({
            checkboxes: {
                ...prevState.checkboxes,
                [name]: !prevState.checkboxes[name]
            }
        }));
    };

    handleFormSubmit = event => {
        event.preventDefault();

        Object.keys(this.state.checkboxes)
            .filter(checkbox => this.state.checkboxes[checkbox])
            .forEach(checkbox => {

                // this is where the ids can be seen in the console.
                console.log(checkbox, "is selected.");



            });
    };

    makeCheckbox = symptomID => (
        <Checkbox
            label={symptomID}
            isSelected={this.state.checkboxes[symptomID]}
            onCheckboxChange={this.handleCheckboxChange}
            key={symptomID}
        />
    );

    makeCheckboxes = () => arrOfHead.map(this.makeCheckbox);

    render() {
        return (
            <div className="modal" tabindex="-1" role="dialog" id="symptomModal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Check all symptoms that apply</p>
                            <div class="headAndFace-list">
                                <form className="" id="symptomForm" onSubmit={this.handleFormSubmit}>
                                    {this.makeCheckboxes()}
                                    <button type="submit" className="btn btn-primary">Diagnose</button>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Symptom;