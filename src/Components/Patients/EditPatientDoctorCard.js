import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteRelation} from '../../Actions';
import {addRelation} from '../../Actions';
import {Link} from 'react-router-dom';

class EditPatientDoctorCard extends Component{
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
                <Link to={"/doctors/" + this.props.doctor.id + "/edit/"}>
                <button>Edit</button>
                </Link>
                <button onClick={() => {
                    let relationObj = {dId: this.props.doctor.id, pId: this.props.patient.id}
                    this.props.deleteRelation(relationObj);
                    let emptyRelation = {dId: -1, pId: this.props.patient.id}
                    this.props.addRelation(emptyRelation);
                    this.props.undoDoctorSelection();
                    }}>Remove Doctor From Patient</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return({
        
    });
}

export default connect (mapStateToProps,{
    deleteRelation,
    addRelation
})(EditPatientDoctorCard);