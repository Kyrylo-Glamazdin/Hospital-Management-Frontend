import React, {Component} from 'react';
import '../../Styles/Doctors/DoctorDropdownPatientCard.css';

class DoctorDropdownPatientCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            selected: false
        }
        this.toggleSelection = this.toggleSelection.bind(this);
    }

    toggleSelection(){
        if (this.state.selected){
            this.props.removePatientFromDoctor(this.props.patient);
        }
        else{
            this.props.addPatientToDoctor(this.props.patient)
        }
        this.setState({selected: !this.state.selected});
    }

    render(){
        if (!this.state.selected){
            return(
                <div className="dropdown-patient-card-container-unselected" onClick={this.toggleSelection}>
                <img className="dropdown-patient-image" src = {this.props.patient.image}/>
                    <div className="dropdown-patient-card-text-section">
                    {/* <Link to={"/patients/" + this.props.patient.id}>
                            <button className="patient-card-view-button">View Patient</button>
                        </Link> */}
                        <div className="dropdown-patient-card-name">
                            {this.props.patient.name}
                        </div>
                        <div className="dropdown-patient-card-diagnosis">
                            Diagnosis: {this.props.patient.diagnosis}
                        </div>
                        <div className="dropdown-patient-card-department">
                            Department: {this.props.patient.department}
                        </div>
                        <div className="dropdown-patient-contact-section">
                            Contact: {this.props.patient.phone}
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div className="dropdown-patient-card-container-selected" onClick={this.toggleSelection}>
                <img className="dropdown-patient-image" src = {this.props.patient.image}/>
                    <div className="dropdown-patient-card-text-section">
                    {/* <Link to={"/patients/" + this.props.patient.id}>
                            <button className="patient-card-view-button">View Patient</button>
                        </Link> */}
                        <div className="dropdown-patient-card-name">
                            {this.props.patient.name}
                        </div>
                        <div className="dropdown-patient-card-diagnosis">
                            Diagnosis: {this.props.patient.diagnosis}
                        </div>
                        <div className="dropdown-patient-card-department">
                            Department: {this.props.patient.department}
                        </div>
                        <div className="dropdown-patient-contact-section">
                            Contact: {this.props.patient.phone}
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default DoctorDropdownPatientCard;