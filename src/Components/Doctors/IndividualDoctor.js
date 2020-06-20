import React, {Component} from 'react';

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
            </div>
        );
    }
}

export default IndividualDoctor;