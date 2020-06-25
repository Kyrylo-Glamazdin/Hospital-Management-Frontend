import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class DoctorDoctorCard extends Component{
    constructor(props){
        super(props);
    }

    render(){
        if (this.props.doctor === undefined){
            return(
                <div>
                    No Assigned Doctor
                </div>
            );
        }
        return(
            <div>
                {this.props.doctor.name}
                {this.props.doctor.specialty}
                <Link to={"/doctors/" + this.props.doctor.id}>
                <button>View Doctor</button>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return({
        
    });
}

export default connect (mapStateToProps,{

})(DoctorDoctorCard);