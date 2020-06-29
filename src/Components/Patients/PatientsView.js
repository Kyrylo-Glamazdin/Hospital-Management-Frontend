import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ListOfPatients from './ListOfPatients.js';
import '../../Styles/Doctors/DoctorsView.css';

class PatientsView extends Component{
    render(){
        return(
        <div>
            <div className="container">
                <div className="doctors-view-title">Registered Patients</div>
                    <Link className="register-doctor-button" to="/patientRegistrationForm">Register a New Patient</Link>
                </div>
            <ListOfPatients/>
        </div>
        );
    }
}

export default PatientsView;