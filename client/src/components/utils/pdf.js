// import axios from "axios";
import React from 'react';
import FilledForm from '../FilledForm';

const pdf = {
    regularForm: function (user) {
        return (
            <FilledForm {...user} />
        )
    }
}

export default pdf;