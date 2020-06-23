import React, {Component} from 'react';
import {connect} from 'react-redux';
import {registerDoctor} from '../../Actions';
import {Redirect} from 'react-router';

class DoctorRegistrationForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            specialty: "",
            department: "",
            phone: "",
            iamge: "",
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
                    <label>Emergency Phone Number:
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
        doctors: state.doctors
    });
}

export default connect (mapStateToProps, {
    registerDoctor
})(DoctorRegistrationForm);