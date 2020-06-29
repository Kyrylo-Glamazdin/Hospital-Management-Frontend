import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import '../../Styles/Doctors/DoctorPatientCard.css';

class DoctorDoctorCard extends Component{
    constructor(props){
        super(props);
    }

    render(){
        if (this.props.doctor === undefined){
            return(
                <div>
                    No Assigned Doctor
                </div>
            );
        }
        return(
            <div className="patient-card-container">
                <img className="patient-image" src = {this.props.doctor.image}/>
                <div className="patient-card-text-section">
                    <Link to={"/doctors/" + this.props.doctor.id}>
                        <button className="patient-card-view-button">View Doctor</button>
                    </Link>
                    <div className="patient-card-name">
                        {this.props.doctor.name}
                    </div>
                    <div className="patient-card-diagnosis">
                        {this.props.doctor.specialty}
                    </div>
                    <div className="patient-card-department">
                        Department: {this.props.doctor.department}
                    </div>
                    <div className="patient-contact-section">
                        Contact: {this.props.doctor.phone}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return({
        
    });
}

export default connect (mapStateToProps,{

})(DoctorDoctorCard);