import React, {Component} from 'react';
import {connect} from 'react-redux';
import {editDoctor} from '../../Actions';
import {Redirect} from 'react-router';

class DoctorEditForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.doctor.name,
            specialty: this.props.doctor.specialty,
            department: this.props.doctor.department,
            phone: this.props.doctor.phone,
            redirect: false
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onSubmitHandler(event) {
        event.preventDefault();

        let updatedDoctorInfo = {
            id: this.props.doctor.id,
            name: this.state.name,
            specialty: this.state.specialty,
            department: this.state.department,
            phone: this.state.phone
        }
        this.props.editDoctor(updatedDoctorInfo);

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
                    <label>Emergeny Phone Number:
                        <input name="phone" onChange={this.onChangeHandler} value={this.state.phone}/>
                    </label>
                    <input type="submit" value="Edit"/>
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
    editDoctor
})(DoctorEditForm);