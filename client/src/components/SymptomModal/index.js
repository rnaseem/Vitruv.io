import React from "react";
import sympts from "./symptoms.json";
import Checkbox from "../Checkbox";
import axios from "axios";


// this is where the API call will go, Im getting the IDs here to display further down
const symptoms = sympts.map(function (sympt) {
    let symptID = sympt.id
    return symptID
    // axios.get("/api/symptoms")
    // .then() 
});


class Symptom extends React.Component {
    state = {
        checkboxes: symptoms.reduce(
          (symptoms, symptom) => ({
            ...symptoms,
            [symptom]: false
          }),
          {}
        )
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
    
      makeCheckboxes = () => symptoms.map(this.makeCheckbox);

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