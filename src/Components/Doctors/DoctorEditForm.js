import React, {Component} from 'react';
import {connect} from 'react-redux';
import {editDoctor} from '../../Actions';
import {deleteDoctor} from '../../Actions';
import {addRelation} from '../../Actions';
import {deleteRelation} from '../../Actions';
import {Redirect} from 'react-router';
import EditDoctorPatientList from './EditDoctorPatientList.js';
import DoctorDropdownPatientCard from './DoctorDropdownPatientCard.js';
import '../../Styles/Doctors/DoctorRegistrationForm.css';
import '../../Styles/Doctors/DoctorEditForm.css';

class DoctorEditForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.doctor.name,
            specialty: this.props.doctor.specialty,
            department: this.props.doctor.department,
            phone: this.props.doctor.phone,
            email: this.props.doctor.email,
            image: "",
            selectedPatients: [],
            dropdownOpen: false,
            dropdown: <div/>,
            patientsWithNoDoctor: [],
            patientsSet: false,
            redirect: false
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.addPatientToDoctor = this.addPatientToDoctor.bind(this);
        this.removePatientFromDoctor = this.removePatientFromDoctor.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.finishPatientSelection = this.finishPatientSelection.bind(this);
        this.undoPatientSelection = this.undoPatientSelection.bind(this);
        this.deleteDoctorRelations = this.deleteDoctorRelations.bind(this);
    }

    onSubmitHandler(event) {
        event.preventDefault();

        let docImg = "";
        if (this.state.image === ""){
            docImg = this.props.doctor.image
        }

        let updatedDoctorInfo = {
            id: this.props.doctor.id,
            name: this.state.name,
            specialty: this.state.specialty,
            department: this.state.department,
            phone: this.state.phone,
            email: this.state.email,
            image: this.state.image
        }
        if (docImg !== ""){
            updatedDoctorInfo.image = docImg
        }
        this.props.editDoctor(updatedDoctorInfo);

        // PUT request here
        //not working, but works if the line above is commented out??
        this.setState({
            redirect: true
        })
    }

    deleteDoctorRelations(){
        let doctorRelations = this.props.doctorPatientRelations.filter(relation => (relation.dId === this.props.doctor.id));
        if (doctorRelations){
            for (let i = doctorRelations.length - 1; i >= 0; i--){
                let oldRelationObj = doctorRelations[i];
                let newRelationObj = {dId: -1, pId: doctorRelations[i].pId}
                this.props.deleteRelation(oldRelationObj);
                this.props.addRelation(newRelationObj);
            }
        }
    }

    onChangeHandler(event){
            this.setState({
                [event.target.name]: event.target.value
            })
    }

    addPatientToDoctor(patient){
        let selectedPatients = this.state.selectedPatients;
        selectedPatients.push(patient);
        console.log(selectedPatients);
        this.setState({selectedPatients})
    }

    removePatientFromDoctor(patient){
        let selectedPatients = this.state.selectedPatients.filter(pat => (pat.id !== patient.id));
        console.log(selectedPatients);
        this.setState({selectedPatients});
    }

    toggleDropdown(){
        let customDropdown = <div className="dropdown-patients">There are no patients without a doctor</div>
        if (this.state.patientsWithNoDoctor.length > 0){
            customDropdown = <div className="dropdown-patients">
                    {this.state.patientsWithNoDoctor.map(patient => (
                        <DoctorDropdownPatientCard key={"dropdown"+patient.id} 
                        addPatientToDoctor={this.addPatientToDoctor} 
                        removePatientFromDoctor = {this.removePatientFromDoctor}
                        patient={patient}/>
                    ))}
                    <button className="add-patients-to-doctor-button" onClick={this.finishPatientSelection}>Add Patients to Doctor</button>
            </div>
        }
        if (this.state.dropdownOpen){
            this.setState({
                dropdown: <div/>,
                dropdownOpen: false
            })
        }
        else{
            this.setState({
                dropdown: customDropdown,
                dropdownOpen: true
            })
        }
    }

    finishPatientSelection(){
        for (let i = 0; i < this.state.selectedPatients.length; i++){
            let newRelation = {dId: this.props.doctor.id, pId: this.state.selectedPatients[i].id}
            let oldRelation = {dId: -1, pId: this.state.selectedPatients[i].id}
            this.props.addRelation(newRelation);
            this.props.deleteRelation(oldRelation);
        }
        this.setState({
            selectedPatients: [],
            patientsSet: false
        })
        this.toggleDropdown();
    }

    undoPatientSelection(){
        this.setState({patientsSet: false})
    }

    render(){
        if (this.state.redirect){
            return(
                <Redirect to="/doctors/"/>
            )
        }
        let emptyRelations = this.props.doctorPatientRelations.filter(relation => relation.dId === -1);
        let patientsWithNoDoctor = [];
        for (let i = 0; i < emptyRelations.length; i++){
            for (let j = 0; j < this.props.patients.length; j++){
                if (this.props.patients[j].id === emptyRelations[i].pId){
                    patientsWithNoDoctor.push(this.props.patients[j]);
                }
            }
        }
        if (!this.state.patientsSet){
            this.setState({
                patientsWithNoDoctor,
                patientsSet: true
            })
        }
        return(
            <div className="main-doctor-edit-container">
                <form className="doctor-edit-form" onSubmit={this.onSubmitHandler}>
                <label className="standard-label">Name:
                        <div>
                            <input className="standard-input" name="name" onChange={this.onChangeHandler} value={this.state.name}/>
                        </div>
                    </label>
                    <label className="standard-label">Specialty:
                        <div>
                            <input className="standard-input" name="specialty" onChange={this.onChangeHandler} value={this.state.specialty}/>
                        </div>
                    </label>
                    <label className="standard-label">Department:
                        <div>
                            <input className="standard-input" name="department" onChange={this.onChangeHandler} value={this.state.department}/>
                        </div>
                    </label>
                    <label className="standard-label">Emergency Phone Number:
                        <div>
                            <input className="standard-input" name="phone" onChange={this.onChangeHandler} value={this.state.phone}/>
                        </div>
                    </label>
                    <label className="standard-label">Email:
                        <div>
                            <input className="standard-input" name="email" onChange={this.onChangeHandler} value={this.state.email}/>
                        </div>
                    </label>
                    <label className="standard-label">Image:
                        <div>
                            <input className="standard-input" name="image" onChange={this.onChangeHandler} value={this.state.image}/>
                        </div>
                    </label>
                    <input className="standard-doctor-edit-button" type="submit" value="Finish Editing"/>
                    <button className="standard-doctor-delete-button" onClick={() => {
                    this.deleteDoctorRelations();
                    this.props.deleteDoctor(this.props.doctor);
                    this.setState({
                        redirect: true
                    })
                    }}>Delete Doctor
                </button>
                </form>
                <div className="doctors-patient-view-list">
                    <EditDoctorPatientList doctor={this.props.doctor} undoPatientSelection={this.undoPatientSelection}/>
                </div>
                <button className="add-patients-to-doctor-button" onClick={this.toggleDropdown}>Add More Patients</button>
                <div className="doctor-dropdown-container">
                    {this.state.dropdown}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return({
        doctors: state.doctors,
        patients: state.patients,
        doctorPatientRelations: state.doctorPatientRelations
    });
}

export default connect (mapStateToProps, {
    editDoctor,
    deleteDoctor,
    addRelation,
    deleteRelation
})(DoctorEditForm);