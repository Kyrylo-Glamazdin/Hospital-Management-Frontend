import React, {Component} from 'react';

class DoctorCard extends Component{
    render(){
        return(
            <div>
                {this.props.doctor.name}<br/>
                {this.props.doctor.specialty}<br/>
                {this.props.doctor.phone}<br/><br/>
            </div>
        );
    }
}

export default DoctorCard;