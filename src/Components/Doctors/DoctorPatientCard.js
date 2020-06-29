import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import '../../Styles/Doctors/DoctorPatientCard.css';

class DoctorPatientCard extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="patient-card-container">
                <img className="patient-image" src = {this.props.patient.image}/>
                <div className="patient-card-text-section">
                <Link to={"/patients/" + this.props.patient.id}>
                        <button className="patient-card-view-button">View Patient</button>
                    </Link>
                    <div className="patient-card-name">
                        {this.props.patient.name}
                    </div>
                    <div className="patient-card-diagnosis">
                        Diagnosis: {this.props.patient.diagnosis}
                    </div>
                    <div className="patient-card-department">
                        Department: {this.props.patient.department}
                    </div>
                    <div className="patient-contact-section">
                        Contact: {this.props.patient.phone}
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

})(DoctorPatientCard);