import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import DoctorPatientList from './DoctorPatientList.js';
import '../../Styles/Doctors/IndividualDoctor.css';

class IndividualDoctor extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className="doctor-card-profile-container">
                    <div className="doctor-card-profile">
                        <img className="doctor-profile-image" src={this.props.doctor.image}/>
                        <div className="doctor-profile-text-section">
                            <Link to={"/doctors/" + this.props.doctor.id + "/edit/"}>
                                <button className="edit-button">Edit</button>
                            </Link>
                            <div className="doctor-name">
                                {this.props.doctor.name}
                            </div>
                            <div className="doctor-specialty">
                                {this.props.doctor.specialty}
                            </div>
                            <div className="doctor-department">
                                Department: {this.props.doctor.department}
                            </div>
                            <div className="contact-section">
                            <div className="phone-num">
                                Emergency Contact: {this.props.doctor.phone}
                            </div>
                            Email: {this.props.doctor.email}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="doctor-card-profile-container">
                    <DoctorPatientList className="list-of-patients" doctor={this.props.doctor}/>
                </div>
            </div>
        );
    }
}

export default IndividualDoctor;