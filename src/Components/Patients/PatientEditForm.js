import React, {Component} from 'react';
import {connect} from 'react-redux';
import {editPatient} from '../../Actions';
import {deletePatient} from '../../Actions';
import {deleteRelation} from '../../Actions';
import {Redirect} from 'react-router';
import EditSymptomListWrapper from './EditSymptomListWrapper.js';
import EditTreatmentListWrapper from './EditTreatmentListWrapper.js';
import EditPatientDoctorCardWrapper from './EditPatientDoctorCardWrapper.js';

class PatientEditForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.patient.name,
            diagnosis: this.props.patient.diagnosis,
            department: this.props.patient.department,
            phone: this.props.patient.phone,
            image: this.props.patient.image,
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
            specialty: this.state.specialty,
            department: this.state.department,
            phone: this.state.phone,
            image: this.state.image
        }
        this.props.editPatient(updatedPatientInfo);

        // PUT request here
        //not working, but works if the line above is commented out??
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
                <form onSubmit={this.onSubmitHandler}>
                    <label>Name:
                        <input name="name" onChange={this.onChangeHandler} value={this.state.name}/>
                    </label>
                    <label>Diagnosis:
                        <input name="diagnosis" onChange={this.onChangeHandler} value={this.state.diagnosis}/>
                    </label>
                    <label>Department:
                        <input name="department" onChange={this.onChangeHandler} value={this.state.department}/>
                    </label>
                    <label>Phone Number:
                        <input name="phone" onChange={this.onChangeHandler} value={this.state.phone}/>
                    </label>
                    <label>Image:
                        <input name="image" onChange={this.onChangeHandler} value={this.state.image}/>
                    </label>
                    <input type="submit" value="Edit"/>
                </form><br/>
                {"Symptoms:"}
                <EditSymptomListWrapper patient={this.props.patient}/><br/>
                {"Treatments:"}
                <EditTreatmentListWrapper patient={this.props.patient}/>
                <EditPatientDoctorCardWrapper doctorSet={this.state.doctorSet} assignedDoctor={assignedDoctor} patient={this.props.patient} undoDoctorSelection={this.undoDoctorSelection}/>
                
                <button onClick={() => {
                    this.deletePatientRelations();
                    this.props.deletePatient(this.props.patient);
                    this.setState({
                        redirect: true
                    })
                    }}>Discharge Patient</button>
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