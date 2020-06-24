import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteRelation} from '../../Actions';
import {Link} from 'react-router-dom';

class EditDoctorPatientCard extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                {this.props.patient.name}
                {this.props.patient.diagnosis}
                <Link to={"/patients/" + this.props.patient.id + "/edit/"}>
                <button>Edit</button>
                </Link>
                <button onClick={() => {
                    let relationObj = {dId: this.props.doctor.id, pId: this.props.patient.id}
                    this.props.deleteRelation(relationObj);
                    }}>Remove From Doctor</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return({
        
    });
}

export default connect (mapStateToProps,{
    deleteRelation
})(EditDoctorPatientCard);