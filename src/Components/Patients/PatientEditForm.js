import React, {Component} from 'react';
import {connect} from 'react-redux';
import {editPatient} from '../../Actions';
import {deletePatient} from '../../Actions';
import {deleteRelation} from '../../Actions';
import {Redirect} from 'react-router';
import EditSymptomListWrapper from './EditSymptomListWrapper.js';
import EditTreatmentListWrapper from './EditTreatmentListWrapper.js';
import EditPatientDoctorCardWrapper from './EditPatientDoctorCardWrapper.js';
import '../../Styles/Patients/PatientEditForm.css';

class PatientEditForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.patient.name,
            diagnosis: this.props.patient.diagnosis,
            department: this.props.patient.department,
            phone: this.props.patient.phone,
            image: "",
            assignedDoctor: undefined,
            doctorSet: false,
            showButton: true,
            dropdownButton: <div/>,
            redirect: false
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.undoDoctorSelection = this.undoDoctorSelection.bind(this);
        this.deletePatientRelations = this.deletePatientRelations.bind(this);
    }

    onSubmitHandler(event) {
        event.preventDefault();

        let updatedPatientInfo = {
            id: this.props.patient.id,
            name: this.state.name,
            diagnosis: this.state.diagnosis,
            department: this.state.department,
            image: this.props.patient.image,
            phone: this.state.phone
        }

        if (this.state.image !== ""){
            updatedPatientInfo.image = this.state.image
        }

        this.props.editPatient(updatedPatientInfo);

        // PUT request here
        this.setState({
            redirect: true
        })
    }

    deletePatientRelations(){
        let patientRelation = this.props.doctorPatientRelations.filter(relation => (relation.pId === this.props.patient.id));
        if (patientRelation.length > 0){
            let relationObj = patientRelation[0];
            this.props.deleteRelation(relationObj);
        }
    }

    onChangeHandler(event){
            this.setState({
                [event.target.name]: event.target.value
            })
    }

    undoDoctorSelection(){
        this.setState({doctorSet: false})
    }

    render(){
        if (this.state.redirect){
            return(
                <Redirect to="/patients/"/>
            )
        }

        let doctorRelation = this.props.doctorPatientRelations.filter(relation => (relation.pId === this.props.patient.id))[0];
        let assignedDoctor = undefined;
        if (doctorRelation.dId !== -1){
            for (let i = 0; i < this.props.doctors.length; i++){
                if (this.props.doctors[i].id === doctorRelation.dId){
                    assignedDoctor = this.props.doctors[i];
                    if (!this.state.doctorSet){
                        this.setState({
                            doctorSet: true,
                            dropdownButton: <div/>,
                            assignedDoctor
                        });
                    }
                    break;
                }
            }
        }
        if (!this.state.doctorSet && this.state.showButton){
            console.log(this.state.doctorSet)
            console.log(this.state.showButton)
            this.setState({
                dropdownButton: <button>Button</button>, 
                showButton: false
            })
        }

        return(
            <div>
                <form className="patient-edit-form" onSubmit={this.onSubmitHandler}>
                <label className="patient-edit-standard-label">Name:
                        <div>
                            <input className="patient-edit-standard-input" name="name" onChange={this.onChangeHandler} value={this.state.name}/>
                        </div>
                    </label>
                    <label className="patient-edit-standard-label">Diagnosis:
                        <div>
                            <input className="patient-edit-standard-input" name="diagnosis" onChange={this.onChangeHandler} value={this.state.diagnosis}/>
                        </div>
                    </label>
                    <label className="patient-edit-standard-label">Department:
                        <div>
                            <input className="patient-edit-standard-input" name="department" onChange={this.onChangeHandler} value={this.state.department}/>
                        </div>
                    </label>
                    <label className="patient-edit-standard-label">Phone Number:
                        <div>
                            <input className="patient-edit-standard-input" name="phone" onChange={this.onChangeHandler} value={this.state.phone}/>
                        </div>
                    </label>
                    <label className="patient-edit-standard-label">Image:
                        <div>
                            <input className="patient-edit-standard-input" name="image" onChange={this.onChangeHandler} value={this.state.image}/>
                        </div>
                    </label>
                    <div className="patient-edit-buttons">
                        <input className="patient-edit-confirm-button" type="submit" value="Finish Editing"/>
                        <button className="patient-edit-delete-button" onClick={() => {
                        this.deletePatientRelations();
                        this.props.deletePatient(this.props.patient);
                        this.setState({
                            redirect: true
                        })
                        }}>Discharge Patient</button>
                    </div>
                </form>
                <div className="patient-edit-form">
                    <div className="assigned-doctor-header">Assigned Doctor
                    </div>
                    <div className="doctor-selection-section">
                        <EditPatientDoctorCardWrapper doctorSet={this.state.doctorSet} assignedDoctor={assignedDoctor} patient={this.props.patient} undoDoctorSelection={this.undoDoctorSelection}/>
                    </div>
                <div className="edit-patient-symptoms-and-treatments-container">
                    <div className="edit-patient-symptoms-and-treatments">
                        <div className="treatment-list">Symptoms:
                            <EditSymptomListWrapper patient={this.props.patient}/>
                        </div>
                        <div className="edit-patient-treatment-list">Treatments:
                        <EditTreatmentListWrapper patient={this.props.patient}/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return({
        patients: state.patients,
        doctors: state.doctors,
        doctorPatientRelations: state.doctorPatientRelations
    });
}

export default connect (mapStateToProps, {
    editPatient,
    deletePatient,
    deleteRelation
})(PatientEditForm);