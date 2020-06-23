import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ListOfPatients from './ListOfPatients.js';

class PatientsView extends Component{
    render(){
        return(
            <div>
                <div className="patients-view-title">Registered Patients</div>
                <Link to="/patientRegistrationForm">Register a New Patient</Link>
                <ListOfPatients/>
            </div>
        );
    }
}

export default PatientsView;