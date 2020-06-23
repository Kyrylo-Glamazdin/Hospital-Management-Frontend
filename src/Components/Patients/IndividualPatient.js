import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SymptomList from './SymptomList.js';
import TreatmentList from './TreatmentList.js';

class IndividualPatient extends Component{
    constructor(props){
        super(props);
    }

    render(){
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
                <Link to={"/patients/" + this.props.patient.id + "/edit/"}>
                    <button>Edit</button>
                </Link>
            </div>
        );
    }
}

export default IndividualPatient;