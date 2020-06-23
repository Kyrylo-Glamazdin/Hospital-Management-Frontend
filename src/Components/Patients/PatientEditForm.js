import React, {Component} from 'react';
import {connect} from 'react-redux';
import {editPatient} from '../../Actions';
import {deletePatient} from '../../Actions';
import {Redirect} from 'react-router';

class PatientEditForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.patient.name,
            diagnosis: this.props.patient.diagnosis,
            department: this.props.patient.department,
            phone: this.props.patient.phone,
            image: this.props.patient.image,
            redirect: false
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
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
                </form>
                <button onClick={() => {
                    this.props.deletePatient(this.props.patient);
                    this.setState({
                        redirect: true
                    })
                    }}>Delete Patient</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return({
        patients: state.patients
    });
}

export default connect (mapStateToProps, {
    editPatient,
    deletePatient
})(PatientEditForm);