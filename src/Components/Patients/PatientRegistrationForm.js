import React, {Component} from 'react';
import {connect} from 'react-redux';
import {registerPatient} from '../../Actions';
import {Redirect} from 'react-router';

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
            specialty: this.state.specialty,
            department: this.state.department,
            phone: this.state.phone,
            image: this.state.image
        }
        this.props.registerPatient(updatedPatientInfo);

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
                    <label>Specialty:
                        <input name="specialty" onChange={this.onChangeHandler} value={this.state.specialty}/>
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
                    <input type="submit" value="Complete Registration"/>
                </form>
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
    registerPatient
})(PatientRegistrationForm);