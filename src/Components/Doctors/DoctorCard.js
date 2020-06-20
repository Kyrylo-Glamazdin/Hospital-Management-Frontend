import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class DoctorCard extends Component{
    render(){
        return(
            <div>
                {this.props.doctor.name}<br/>
                {this.props.doctor.specialty}<br/>
                {this.props.doctor.phone}<br/>
                <Link to={"/doctors/" + this.props.doctor.id}>
                    <button>View</button>
                </Link><br/>
                <Link to={"/doctors/" + this.props.doctor.id + "/edit/"}>
                    <button>Edit</button>
                </Link>
                <br/><br/>
            </div>
        );
    }
}

export default DoctorCard;