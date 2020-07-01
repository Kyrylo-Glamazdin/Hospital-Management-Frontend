import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../Styles/Doctors/DoctorCard.css';
import '../../Styles/Patients/PatientCard.css';

class PatientCard extends Component{
    render(){
        return(
            <div className="individual-doctor-container">
                <img className="doctor-image" src = {this.props.patient.image} alt="Patient Image"/>
                <div className="doctor-card-text-section">
                    <div className="doctor-card-name">
                        {this.props.patient.name}
                    </div>
                    <div className ="doctor-specs">
                        <div className="patient-specs-diagnosis">
                            Diagnosis: {this.props.patient.diagnosis}
                        </div>
                        <div className="doctor-specs-department">
                            Department: {this.props.patient.department}
                        </div>
                    </div>
                    <div className="doctor-specs-contact">
                        Phone Number: {this.props.patient.phone}
                        <div>
                            Email: {this.props.patient.email}
                        </div>
                    </div>
                    <div className="doctor-card-buttons">
                        <Link className="doctor-link" to={"/patients/" + this.props.patient.id}>
                            <button className="doctor-view-button">View</button>
                        </Link>
                        <Link className="doctor-link" to={"/patients/" + this.props.patient.id + "/edit/"}>
                            <button className="doctor-edit-button">Edit</button>
                        </Link>
                    </div>
                </div>
                <br/><br/>
            </div>

        );
    }
}

export default PatientCard;