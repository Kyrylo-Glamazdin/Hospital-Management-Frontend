import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import SymptomList from './SymptomList.js';
import TreatmentList from './TreatmentList.js';
import PatientDoctorCard from './PatientDoctorCard.js';

class IndividualPatient extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let doctorRelation = this.props.doctorPatientRelations.filter(relation => (relation.pId === this.props.patient.id))[0];
        let assignedDoctor = undefined;
        if (doctorRelation){
            for (let i = 0; i < this.props.doctors.length; i++){
                if (this.props.doctors[i].id === doctorRelation.dId){
                    assignedDoctor = this.props.doctors[i];
                    break;
                }
            }
        }

        return(
            <div>
                {this.props.patient.name}
                {this.props.patient.diagnosis}
                {this.props.patient.department}
                {this.props.patient.phone}<br/>
                {"Symptoms:"}
                <SymptomList patient={this.props.patient}/><br/>
                {"Treatments:"}
                <TreatmentList patient={this.props.patient}/>
                <div>
                    <div>
                        Assigned Doctor
                    </div>
                    <PatientDoctorCard doctor={assignedDoctor}/>
                </div>
                <Link to={"/patients/" + this.props.patient.id + "/edit/"}>
                    <button>Edit</button>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return({
        doctors: state.doctors,
        doctorPatientRelations: state.doctorPatientRelations
    });
}

export default connect (mapStateToProps,{

})(IndividualPatient);