import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import SymptomList from './SymptomList.js';
import TreatmentList from './TreatmentList.js';
import PatientDoctorCard from './PatientDoctorCard.js';
import '../../Styles/Doctors/IndividualDoctor.css';
import '../../Styles/Patients/IndividualPatient.css';

class IndividualPatient extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let doctorRelation = this.props.doctorPatientRelations.filter(relation => (relation.pId === this.props.patient.id))[0];
        let assignedDoctor = undefined;
        if (doctorRelation){
            for (let i = 0; i < this.props.doctors.length; i++){
                if (this.props.doctors[i].id === doctorRelation.dId){
                    assignedDoctor = this.props.doctors[i];
                    break;
                }
            }
        }

        return(
            <div>
                <div className="doctor-card-profile-container">
                    <div className="doctor-card-profile">
                        <img className="doctor-profile-image" src = {this.props.patient.image}/>
                        <div className="doctor-profile-text-section">
                            <Link to={"/patients/" + this.props.patient.id + "/edit/"}>
                                <button className="edit-button">Edit</button>
                            </Link>
                            <div className="doctor-name">
                                {this.props.patient.name}
                            </div>
                            <div className="doctor-specialty">
                                Diagnosis: {this.props.patient.diagnosis}
                            </div>
                            <div className="doctor-department">
                                Department: {this.props.patient.department}
                            </div>
                            <div className="contact-section">
                                <div className="phone-num">
                                    Emergency Contact: {this.props.patient.phone}
                                    <div>
                                        Email: {this.props.patient.email}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="doctor-card-profile-container">
                    <div className="doctors-patients">Assigned Doctor
                    </div>
                    <PatientDoctorCard doctor={assignedDoctor}/>
                </div>
                <div className="symptoms-and-treatments-container">
                    <div className="symptoms-and-treatments">
                        <div className="treatment-list">Symptoms:
                            <SymptomList patient={this.props.patient}/>
                        </div>
                        <div className="treatment-list">Treatments:
                        <TreatmentList patient={this.props.patient}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return({
        doctors: state.doctors,
        doctorPatientRelations: state.doctorPatientRelations
    });
}

export default connect (mapStateToProps,{

})(IndividualPatient);