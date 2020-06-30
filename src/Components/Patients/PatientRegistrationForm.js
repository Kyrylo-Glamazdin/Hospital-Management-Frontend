import React, {Component} from 'react';
import {connect} from 'react-redux';
import {registerPatient} from '../../Actions';
import {getNextPatientId} from '../../Actions';
import {addRelation} from '../../Actions';
import {Redirect} from 'react-router';
import axios from 'axios';
import '../../Styles/Doctors/DoctorRegistrationForm.css';

class PatientRegistrationForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            diagnosis: "",
            department: "",
            phone: "",
            email: "",
            image: "",
            redirect: false
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onSubmitHandler(event) {
        event.preventDefault();

        let updatedPatientInfo = {
            name: this.state.name,
            diagnosis: this.state.diagnosis,
            department: this.state.department,
            phone: this.state.phone,
            email: this.state.email,
            image: this.state.image
        }

        axios.post('http://localhost:4100/api/patients', {
            name: this.state.name,
            diagnosis: this.state.diagnosis,
            department: this.state.department,
            phone: this.state.phone,
            email: this.state.email,
            image: this.state.image
        })
        .then(res => {
            console.log(res)
        })

        axios.get('http://localhost:4100/api/lastPatId')
        .then(res => {
            updatedPatientInfo.id = res.data[0].lastId;
            console.log(updatedPatientInfo.id)
            this.props.registerPatient(updatedPatientInfo);
            let newRelation = {dId: -1, pId: updatedPatientInfo.id};
            this.props.addRelation(newRelation);

            axios.post('http://localhost:4100/api/doctorPatients', newRelation)
            .then(res => {
                console.log(res)
            })
        })

        
        this.setState({
            redirect: true
        })
    }

    onChangeHandler(event){
            this.setState({
                [event.target.name]: event.target.value
            })
    }

    render(){
        if (this.state.redirect){
            return(
                <Redirect to="/patients/"/>
            )
        }
        return(
            <div>
                <form className="doctor-registration-form" onSubmit={this.onSubmitHandler}>
                    <label className="standard-label">Name:
                        <div>
                            <input className="standard-input" name="name" onChange={this.onChangeHandler} value={this.state.name}/>
                        </div>
                    </label>
                    <label className="standard-label">Diagnosis:
                        <div>
                            <input className="standard-input" name="diagnosis" onChange={this.onChangeHandler} value={this.state.diagnosis}/>
                        </div>
                    </label>
                    <label className="standard-label">Department:
                        <div>
                            <input className="standard-input" name="department" onChange={this.onChangeHandler} value={this.state.department}/>
                        </div>
                    </label>
                    <label className="standard-label">Phone Number:
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
                    <input className="confirm-button" type="submit" value="Complete Registration"/>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return({
        patients: state.patients,
        nextPatientId: state.nextPatientId
    });
}

export default connect (mapStateToProps, {
    registerPatient,
    getNextPatientId,
    addRelation
})(PatientRegistrationForm);