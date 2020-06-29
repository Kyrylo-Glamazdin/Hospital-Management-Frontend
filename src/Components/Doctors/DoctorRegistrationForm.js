import React, {Component} from 'react';
import {connect} from 'react-redux';
import {registerDoctor} from '../../Actions';
import {Redirect} from 'react-router';
import '../../Styles/Doctors/DoctorRegistrationForm.css';

class DoctorRegistrationForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            specialty: "",
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

        let updatedDoctorInfo = {
            name: this.state.name,
            specialty: this.state.specialty,
            department: this.state.department,
            phone: this.state.phone,
            email: this.state.email,
            image: this.state.image
        }
        this.props.registerDoctor(updatedDoctorInfo);

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
                <Redirect to="/doctors/"/>
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
                    <input className="confirm-button" type="submit" value="Complete Registration"/>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return({
        doctors: state.doctors
    });
}

export default connect (mapStateToProps, {
    registerDoctor
})(DoctorRegistrationForm);