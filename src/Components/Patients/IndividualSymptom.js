import React from 'react';
import {connect} from 'react-redux';
import {deleteSymptom} from '../../Actions'
import '../../Styles/Patients/IndividualPatient.css';
import axios from 'axios';
import symptom_image from '../../Styles/Images/symptom_default_image.jpg';

class IndividualSymptom extends React.Component{
        constructor(props){
            super(props)

            this.removeSymptom = this.removeSymptom.bind(this);
        }

        removeSymptom(){
            axios.post('http://localhost:4100/api/ssymptom/', this.props.trObj)
            .then(res => {
                this.props.deleteSymptom(this.props.trObj)
            })
        }

        render(){
        return(
            <div className="individual-patient-individual-treatment">
                <img className="patient-props-image" src = {symptom_image}/>
                <div className="patient-text-props">
                    {this.props.trObj.symptom}
                    <button className="delete-treatment-button" onClick={this.removeSymptom}>Remove</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return({
        symptoms: state.symptoms
    });
}

export default connect (mapStateToProps,{
    deleteSymptom
})(IndividualSymptom);