import React, {Component} from 'react';
import {connect} from 'react-redux';
import {registerPatient} from '../../Actions';
import {getNextPatientId} from '../../Actions';
import {addRelation} from '../../Actions';
import {Redirect} from 'react-router';
import '../../Styles/Doctors/DoctorRegistrationForm.css';

class PatientRegistrationForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            diagnosis: "",
            department: "",
            phone: "",
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
            image: this.state.image
        }

        let patientId = this.props.nextPatientId;
        this.props.registerPatient(updatedPatientInfo);
        let newRelation = {dId: -1, pId: patientId};
        this.props.addRelation(newRelation);

        // PUT request here
        //not working, but works if the line above is commented out??
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