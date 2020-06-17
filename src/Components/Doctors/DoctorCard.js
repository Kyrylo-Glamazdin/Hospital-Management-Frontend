import React, {Component} from 'react';

class DoctorCard extends Component{
    render(){
        return(
            <div>
                {this.props.doctor.name}
            </div>
        );
    }
}

export default DoctorCard;