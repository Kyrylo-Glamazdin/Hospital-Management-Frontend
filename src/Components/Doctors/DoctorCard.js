import React, {Component} from 'react';

class DoctorCard extends Component{
    render(){
        console.log(this.props.doctor)
        return(
            <div>
                {this.props.doctor.name}
            </div>
        );
    }
}

export default DoctorCard;