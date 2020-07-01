import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addRelation} from '../../Actions';
import {deleteRelation} from '../../Actions';
import EditPatientDoctorCard from './EditPatientDoctorCard.js';
import PatientDropdownDoctorCard from './PatientDropdownDoctorCard.js';
import axios from 'axios';
import '../../Styles/Patients/PatientDropdownDoctorCard.css';

class EditPatientDoctorCardWrapper extends Component{
    constructor(props){
        super(props);
        this.state = {
            showDoctors: false,
            doctorsList: <div/>,
            sortedDoctors: [],
            selectedDoctor: undefined
        }
        
        this.toggleShowDoctors = this.toggleShowDoctors.bind(this);
        this.assignDoctor = this.assignDoctor.bind(this);
        this.doctorSelect = this.doctorSelect.bind(this);

    }

    componentWillMount(){
        let thisDepartmentDoctors = this.props.doctors.filter(doctor => (this.props.patient.department === doctor.department));
        let nonDepartmentDoctors = this.props.doctors.filter(doctor => (this.props.patient.department !== doctor.department));
        let sortedDoctors = thisDepartmentDoctors.concat(nonDepartmentDoctors);
        this.setState({sortedDoctors});
    }

    doctorSelect(doctor){
        this.setState({selectedDoctor: doctor});
    }

    assignDoctor(){
        if(this.state.selectedDoctor){
            let emptyRelation = {dId: -1, pId: this.props.patient.id};
            let newRelation = {dId: this.state.selectedDoctor.id, pId: this.props.patient.id};
            this.props.deleteRelation(emptyRelation);
            this.props.addRelation(newRelation);
            
            axios.post('http://localhost:4100/api/ralation/', emptyRelation)
                    .then(res => {
                    console.log(res);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            axios.post('http://localhost:4100/api/reelation/', newRelation)
                .then(res => {
                    console.log(res);
                    this.setState({
                        showDoctors: false,
                        doctorsList: <div/>
                    })
                })

        }
    }

    toggleShowDoctors(){
        if (this.state.showDoctors){
            this.setState({
                showDoctors: !this.state.showDoctors,
                doctorsList: <div/>
            })
        }
        else{
            this.setState({
                showDoctors: !this.state.showDoctors,
                doctorsList: <div className="sorted-doctors-list">
                    <div className="sorted-doctors-list">
                        {this.state.sortedDoctors.map(doctor => 
                            <PatientDropdownDoctorCard doctor={doctor} doctorSelect={this.doctorSelect} selectedDoctor={this.state.selectedDoctor} />
                        )}
                        <button className="assign-doctor-button" onClick={this.assignDoctor}>
                            Assign Doctor
                        </button></div>
                    </div>
            })
        }
    }

    render(){
        if (this.props.doctorSet){
            return(
                <EditPatientDoctorCard doctor={this.props.assignedDoctor} patient={this.props.patient} undoDoctorSelection={this.props.undoDoctorSelection}/>
            );
        }
        else{
            return(
                <div>
                    <div className="no-assigned-doctor">This patient has no assigned doctor</div>
                    <button className="assign-doctor-button" onClick={this.toggleShowDoctors}>
                        Add Doctor to Patient
                    </button>
                    {this.state.doctorsList}
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return({
        doctors: state.doctors,
        doctorPatientRelations: state.doctorPatientRelations
    });
}

export default connect (mapStateToProps, {
    addRelation,
    deleteRelation
})(EditPatientDoctorCardWrapper);