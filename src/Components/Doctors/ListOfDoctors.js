import React, {Component} from 'react';
import {connect} from 'react-redux';
import DoctorCard from './DoctorCard.js';
import './../../Styles/Doctors/ListOfDoctors.css';

class ListOfDoctors extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="doctors-list">
                {this.props.doctors.map(doctor => (<DoctorCard doctor={doctor}/>))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        doctors: state.doctors
    };
}

export default connect(mapStateToProps, {

})(ListOfDoctors);