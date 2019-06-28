import React from "react";
import Checkbox from "../Checkbox";
import axios from "axios";


/* grab bodyData, push the symptoms.name to your checkbox, 
grab that as a value to access, and if clicked, find name === what you clicked,
display that diagnosis. 
Hardest part is how do I drill into the nested object and grab it. 
(Object.entries)
*/

class Symptom extends React.Component {

    state = {
        checkboxes: {},
        bodyData: {},
        regionSymptoms: [],
        diagnosis: [],
        names: []
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
        let checkboxSymptomChoices = [];

        Object.keys(this.state.checkboxes)
            .filter(checkbox => this.state.checkboxes[checkbox])
            .forEach(checkbox => {
                checkboxSymptomChoices.push(checkbox);
            });
        
        const diagnosis = this.state.regionSymptoms
            .filter(symptom => {
              return checkboxSymptomChoices.includes(symptom.nameWithDiagnosis[0])
            })
            .map(symptom => symptom.nameWithDiagnosis[1] )
            .join(", ");

            this.setState({
                diagnosis: diagnosis
            });
    };

    makeCheckbox = symptomOption => (
        <Checkbox
            label={symptomOption.nameWithDiagnosis[0]}
            isSelected={this.state.checkboxes[symptomOption.nameWithDiagnosis[0]]}
            onCheckboxChange={this.handleCheckboxChange}
            key={symptomOption.name}
        />
    );

    makeCheckboxes = () => this.state.regionSymptoms.map(this.makeCheckbox);




    getSymptomsForRegion = () => {
        let regionSymptoms = [];
        axios.get("/api/body").then((res) => {

            const bodyData = res

            for (let i = 0; i < bodyData.data[0].head.symptoms.length; i++) {
                regionSymptoms.push(bodyData.data[0].head.symptoms[i])
            }


            const symptomOptions = regionSymptoms.reduce(
                (regionSymptoms, symptom) => ({
                    ...regionSymptoms,
                    [symptom.name]: false
                }),
                {}
            );
            this.setState({
                regionSymptoms: regionSymptoms,
                checkboxes: symptomOptions
            });
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedRegion !== this.props.selectedRegion) {
            this.getSymptomsForRegion();
        }
        console.log(this.state.diagnosis)
    }


    render() {
        return (
            <div className="modal" tabIndex="-1" role="dialog" id="symptomModal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title"><strong>Symptoms for {this.props.selectedRegion}</strong></h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p><strong>Check all symptoms that apply</strong></p>
                            <div className="headAndFace-list">
                                <form className="" id="symptomForm" onSubmit={this.handleFormSubmit}>
                                    {this.makeCheckboxes()}
                                    <button type="submit" className="btn btn-primary">Diagnose</button>
                                </form>
                                <div id="results">
                                    <strong>
                                    {this.state.diagnosis}
                                    </strong>
                                </div>
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