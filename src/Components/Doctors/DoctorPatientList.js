import React, {Component} from 'react';
import {connect} from 'react-redux';
import DoctorPatientCard from './DoctorPatientCard.js';
import '../../Styles/Doctors/DoctorPatientList.css';

class DoctorPatientList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let doctorRelations = this.props.doctorPatientRelations.filter(relation => (relation.dId === this.props.doctor.id));
        let treatedPatients = [];
        for (let i = 0; i < doctorRelations.length; i++){
            for (let j = 0; j < this.props.patients.length; j++){
                if (this.props.patients[j].id === doctorRelations[i].pId){
                    treatedPatients.push(this.props.patients[j]);
                }
            }
        }
        if (treatedPatients.length > 0){
            return(
                treatedPatients.map(patient => 
                    <DoctorPatientCard className="individual-patient-card" doctor={this.props.doctor} patient={patient}/>
                )
            );
        }
        else{
            return(
                <div className="no-patients-list">This doctor currently has no patients</div>
            );
        }
    }
}

const mapStateToProps = state => {
    return({
        patients: state.patients,
        doctorPatientRelations: state.doctorPatientRelations
    });
}

export default connect (mapStateToProps,{
    
})(DoctorPatientList);