import React, {Component} from 'react';
import '../../Styles/Doctors/EditDoctorPatientCard.css';
import '../../Styles/Patients/EditPatientDoctorCard.css';

class PatientDropdownDoctorCard extends Component{
    constructor(props){
        super(props);
        this.toggleSelection = this.toggleSelection.bind(this);
    }

    toggleSelection(){
        this.props.doctorSelect(this.props.doctor);
    }

    render(){
        if (this.props.selectedDoctor && this.props.selectedDoctor.id === this.props.doctor.id){
            return(
                <div className="selected-patient-card-container" div className="selected" onClick={this.toggleSelection}>
                    <img className="patient-image" src = {this.props.doctor.image}/>
                    <div className="patient-card-text-section">
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
        else{
            return(
                <div className="unselected-patient-card-container" onClick={this.toggleSelection}>
                    <img className="patient-image" src = {this.props.doctor.image}/>
                    <div className="patient-card-text-section">
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
}

export default PatientDropdownDoctorCard;