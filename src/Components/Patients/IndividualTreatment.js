import React from 'react';
import {connect} from 'react-redux';
import {deleteTreatment} from '../../Actions'
import '../../Styles/Patients/IndividualPatient.css';
import treatment_image from '../../Styles/Images/treatment_default_image.png';

class IndividualTreatment extends React.Component{
        constructor(props){
            super(props)
        }
        render(){
        return(
            <div className="individual-patient-individual-treatment">
                <img className="patient-props-image" src = {treatment_image}/>
                <div className="patient-text-props">
                    {this.props.trObj.treatment}
                    <button className="delete-treatment-button" onClick={() => this.props.deleteTreatment(this.props.trObj)}>Remove</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return({
        treatments: state.treatments
    });
}

export default connect (mapStateToProps,{
    deleteTreatment
})(IndividualTreatment);