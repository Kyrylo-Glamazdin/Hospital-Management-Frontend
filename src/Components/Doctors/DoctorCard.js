import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../Styles/Doctors/DoctorCard.css';

class DoctorCard extends Component{
    render(){
        return(
            <div className="individual-doctor-container">
                <img className="doctor-image" src = {this.props.doctor.image} alt="Doctor Image"/>
                <div className="doctor-card-text-section">
                    <div className="doctor-card-name">
                        {this.props.doctor.name}
                    </div>
                    <div className ="doctor-specs">
                        <div className="doctor-specs-specialty">
                            {this.props.doctor.specialty}
                        </div>
                        <div className="doctor-specs-department">
                            Department: {this.props.doctor.department}
                        </div>
                    </div>
                    <div className="doctor-specs-contact">
                        Phone Number: {this.props.doctor.phone}
                        <div>
                            Email: {this.props.doctor.email}
                        </div>
                    </div>
                    <div className="doctor-card-buttons">
                        <Link className="doctor-link" to={"/doctors/" + this.props.doctor.id}>
                            <button className="doctor-view-button">View</button>
                        </Link>
                        <Link className="doctor-link" to={"/doctors/" + this.props.doctor.id + "/edit/"}>
                            <button className="doctor-edit-button">Edit</button>
                        </Link>
                    </div>
                </div>
                <br/><br/>
            </div>
        );
    }
}

export default DoctorCard;