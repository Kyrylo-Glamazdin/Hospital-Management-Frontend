import React from 'react';
import {connect} from 'react-redux';
import {deleteTreatment} from '../../Actions'
import axios from 'axios';
import '../../Styles/Patients/IndividualPatient.css';
import treatment_image from '../../Styles/Images/treatment_default_image.png';

class IndividualTreatment extends React.Component{
        constructor(props){
            super(props)

            this.removeTreatment = this.removeTreatment.bind(this);
        }

        removeTreatment(){
            axios.post('http://localhost:4100/api/ttreatment/', this.props.trObj)
            .then(res => {
                this.props.deleteTreatment(this.props.trObj)
            })
        }

        render(){
        return(
            <div className="individual-patient-individual-treatment">
                <img className="patient-props-image" src = {treatment_image}/>
                <div className="patient-text-props">
                    {this.props.trObj.treatment}
                    <button className="delete-treatment-button" onClick={this.removeTreatment}>Remove</button>
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