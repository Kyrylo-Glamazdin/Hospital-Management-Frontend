import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteRelation} from '../../Actions';
import {addRelation} from '../../Actions';
import {Link} from 'react-router-dom';
import '../../Styles/Doctors/EditDoctorPatientCard.css';

class EditDoctorPatientCard extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(

            <div className="edit-doctor-patient-card-container">
                <img className="edit-doctor-patient-image" src = {this.props.patient.image}/>
                <div className="edit-doctor-patient-card-text-section">
                <Link to={"/patients/" + this.props.patient.id + "/edit/"}>
                <button className="edit-doctor-patient-card-edit-button">Edit</button>
                </Link>
                <div className="edit-doctor-patient-card-name">
                    {this.props.patient.name}
                </div>
                <div className="edit-doctor-patient-card-diagnosis">
                    Diagnosis: {this.props.patient.diagnosis}
                </div>
                <button className="edit-doctor-patient-card-remove-button" onClick={() => {
                    let relationObj = {dId: this.props.doctor.id, pId: this.props.patient.id}
                    this.props.deleteRelation(relationObj);
                    let emptyRelation = {dId: -1, pId: this.props.patient.id}
                    this.props.addRelation(emptyRelation);
                    this.props.undoPatientSelection();
                    }}>Remove From Doctor</button>
                <div className="edit-doctor-patient-card-department">
                    Department: {this.props.patient.department}
                </div>
                <div className="edit-doctor-patient-contact-section">
                    Contact: {this.props.patient.phone}
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
})(EditDoctorPatientCard);