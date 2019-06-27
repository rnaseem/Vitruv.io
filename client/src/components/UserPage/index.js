import React from "react";
import "./style.css";

class UserPage extends React.Component {

    /*  1. grabbing the userData
        2. saving notes to user
        3. "create a general patient form" loads createPatientForm component. questions to go through
        4. mount answers onto table document-style component
        5. return document converted into pdf
    */
   
    render() {
        return (
            <div className="container" id="userContainer">
                <div className="row">
                    <h1>User Page</h1>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Personal Notes</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div>
                    <button>Save Note</button>
                </div>
                <div>
                    <div id="savedNotes"></div>
                </div>
                <div>
                <button>send to form component</button>
                </div>
            </div>
        )
    }
}

export default UserPage