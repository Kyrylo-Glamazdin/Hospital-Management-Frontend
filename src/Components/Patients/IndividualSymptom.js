import React from 'react';
import {connect} from 'react-redux';
import {deleteSymptom} from '../../Actions'
import symptom_image from '../../Styles/Images/symptom_default_image.jpg';

class IndividualSymptom extends React.Component{
        constructor(props){
            super(props)
        }
        render(){
        return(
            <div className="individual-patient-individual-treatment">
                <img className="patient-props-image" src = {symptom_image}/>
                <div className="patient-text-props">
                    {this.props.trObj.symptom}
                    <button className="delete-treatment-button" onClick={() => this.props.deleteSymptom(this.props.trObj)}>Remove</button>
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