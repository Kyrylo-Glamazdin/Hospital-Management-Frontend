import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ListOfDoctors from './ListOfDoctors.js';

class DoctorsView extends Component{
    render(){
        return(
            <div>
                <div className="doctors-view-title">Registered Doctors</div>
                <Link to="/doctorRegistrationForm">Register a New Doctor</Link>
                <ListOfDoctors/>
            </div>
        );
    }
}

export default DoctorsView;