import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../Styles/Patients/IndividualPatient.css';
import treatment_image from '../../Styles/Images/treatment_default_image.png';

class TreatmentList extends Component{
    constructor(props){
        super(props);
        this.state = {
            patientTreatments: []
        }
    }

    componentDidMount(){
        let listOfTreatments = this.props.treatments;
        let listOfPatientTreatments = [];
        for (let i = 0; i < listOfTreatments.length; i++){
            if (listOfTreatments[i].id === this.props.patient.id){
                listOfPatientTreatments.push(listOfTreatments[i].treatment)
            }
        }
        this.setState({
            patientTreatments: listOfPatientTreatments
        })
    }

    render(){
        return(
            this.state.patientTreatments.map(treatment => 
                <div className="individual-patient-individual-treatment">
                <img className="patient-props-image" src = {treatment_image}/>
                <div className="patient-text-props">
                {treatment}</div>
                </div>)
        );
    }
}

const mapStateToProps = state => {
    return({
        treatments: state.treatments
    });
}

export default connect (mapStateToProps,{

})(TreatmentList);