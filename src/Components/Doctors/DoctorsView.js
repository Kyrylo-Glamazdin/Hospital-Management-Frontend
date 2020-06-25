import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ListOfDoctors from './ListOfDoctors.js';
import '../../Styles/Doctors/DoctorsView.css';

class DoctorsView extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <div className="doctors-view-title">Registered Doctors</div>
                        <Link className="register-doctor-button" to="/doctorRegistrationForm">Register a New Doctor</Link>
                    </div>
                <ListOfDoctors/>
            </div>
        );
    }
}

export default DoctorsView;