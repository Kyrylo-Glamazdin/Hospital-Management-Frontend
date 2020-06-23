import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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
                {this.props.patient.phone}
                <Link to={"/patients/" + this.props.patient.id + "/edit/"}>
                    <button>Edit</button>
                </Link>
            </div>
        );
    }
}

export default IndividualPatient;