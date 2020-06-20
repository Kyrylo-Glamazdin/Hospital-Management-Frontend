import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class IndividualDoctor extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                {this.props.doctor.name}
                {this.props.doctor.specialty}
                {this.props.doctor.department}
                {this.props.doctor.phone}
                <Link to={"/doctors/" + this.props.doctor.id + "/edit/"}>
                    <button>Edit</button>
                </Link>
            </div>
        );
    }
}

export default IndividualDoctor;