import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class DoctorPatientCard extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                {this.props.patient.name}
                {this.props.patient.diagnosis}
                <Link to={"/patients/" + this.props.patient.id}>
                <button>View Patient</button>
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

})(DoctorPatientCard);