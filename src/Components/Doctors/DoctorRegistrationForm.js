import React, {Component} from 'react';
import {connect} from 'react-redux';
import {registerDoctor} from '../../Actions';

class DoctorRegistrationForm extends Component{
    constructor(){
        super();
        this.state = {
            name: "",
            specialty: undefined,
            phone: undefined
        }
    }

    render(){
        return(
            <div>
                Form here
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
      doctors: state.doctors
    };
  }

export default connect (mapStateToProps, {
    registerDoctor
})(DoctorRegistrationForm);