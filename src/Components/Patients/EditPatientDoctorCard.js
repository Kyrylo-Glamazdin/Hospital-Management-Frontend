import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteRelation} from '../../Actions';
import {addRelation} from '../../Actions';
import {Link} from 'react-router-dom';
import '../../Styles/Doctors/EditDoctorPatientCard.css';
import '../../Styles/Patients/EditPatientDoctorCard.css';

class EditPatientDoctorCard extends Component{
    constructor(props){
        super(props);
    }

    render(){
        if (this.props.doctor === undefined){
            return(
                <div>
                    No Assigned Doctor
                </div>
            );
        }
        return(
            <div className="edit-doctor-patient-card-container">
                <img className="edit-doctor-patient-image" src = {this.props.doctor.image}/>
                <div className="edit-doctor-patient-card-text-section">

                    <Link to={"/doctors/" + this.props.doctor.id + "/edit/"}>
                    <button className="edit-patient-edit-doctor-patient-card-edit-button">Edit</button>
                    </Link>

                    <div className="edit-doctor-patient-card-name">
                        {this.props.doctor.name}
                    </div>
                    <div className="edit-doctor-patient-card-diagnosis">
                        {this.props.doctor.specialty}
                    </div>

                    <button className="edit-patient-edit-doctor-patient-card-remove-button" onClick={() => {
                        let relationObj = {dId: this.props.doctor.id, pId: this.props.patient.id}
                        this.props.deleteRelation(relationObj);
                        let emptyRelation = {dId: -1, pId: this.props.patient.id}
                        this.props.addRelation(emptyRelation);
                        this.props.undoDoctorSelection();
                        }}>Remove Doctor From Patient</button>

                    <div className="edit-doctor-patient-card-department">
                        Department: {this.props.doctor.department}
                    </div>
                    <div className="edit-doctor-patient-contact-section">
                        Contact: {this.props.doctor.phone}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return({
        
    });
}

export default connect (mapStateToProps,{
    deleteRelation,
    addRelation
})(EditPatientDoctorCard);