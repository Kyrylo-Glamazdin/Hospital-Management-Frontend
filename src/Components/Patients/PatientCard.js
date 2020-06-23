import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PatientCard extends Component{
    render(){
        return(
            <div>
                {this.props.patient.name}<br/>
                {this.props.patient.diagnosis}<br/>
                {this.props.patient.department}<br/>
                {this.props.patient.phone}<br/>
                <Link to={"/patients/" + this.props.patient.id}>
                    <button>View</button>
                </Link><br/>
                <Link to={"/patients/" + this.props.patient.id + "/edit/"}>
                    <button>Edit</button>
                </Link>
                <br/><br/>
            </div>
        );
    }
}

export default PatientCard;