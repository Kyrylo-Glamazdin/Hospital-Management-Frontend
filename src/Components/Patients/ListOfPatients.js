import React, {Component} from 'react';
import {connect} from 'react-redux';
import PatientCard from './PatientCard.js';

class ListOfPatients extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="patients-list">
                {this.props.patients.map(patient => (<PatientCard patient={patient}/>))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        patients: state.patients
    };
}

export default connect(mapStateToProps, {

})(ListOfPatients);