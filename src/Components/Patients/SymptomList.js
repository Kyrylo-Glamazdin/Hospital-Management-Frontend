import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../Styles/Patients/IndividualPatient.css';
import symptom_image from '../../Styles/Images/symptom_default_image.jpg';

class SymptomList extends Component{
    constructor(props){
        super(props);
        this.state = {
            patientSymptoms: []
        }
    }

    componentDidMount(){
        let listOfSymptoms = this.props.symptoms;
        let listOfPatientSymptoms = [];
        for (let i = 0; i < listOfSymptoms.length; i++){
            if (listOfSymptoms[i].id === this.props.patient.id){
                listOfPatientSymptoms.push(listOfSymptoms[i].symptom)
            }
        }
        this.setState({
            patientSymptoms: listOfPatientSymptoms
        })
    }

    render(){
        return(
            this.state.patientSymptoms.map(symptom => 
                <div className="individual-patient-individual-treatment">
                    <img className="patient-props-image" src = {symptom_image}/>
                    <div className="patient-text-props">
                    {symptom}</div>
                    </div>)
        );
    }
}

const mapStateToProps = state => {
    return({
        symptoms: state.symptoms
    });
}

export default connect (mapStateToProps,{

})(SymptomList);