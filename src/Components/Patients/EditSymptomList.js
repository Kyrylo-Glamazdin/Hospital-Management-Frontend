import React, {Component} from 'react';
import {connect} from 'react-redux';

class EditSymptomList extends Component{
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
            this.state.patientSymptoms.map(symptom => symptom)
        );
    }
}

const mapStateToProps = state => {
    return({
        symptoms: state.symptoms
    });
}

export default connect (mapStateToProps,{

})(EditSymptomList);