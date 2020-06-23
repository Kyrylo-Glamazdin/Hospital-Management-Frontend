import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {deleteTreatment} from '../../Actions';
import IndividualTreatment from './IndividualTreatment.js';

class EditTreatmentList extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            patientTreatments: [],
            newTreatment: ""
        }
    }

    componentDidMount(){
        let listOfTreatments = this.props.treatments;
        let listOfPatientTreatments = [];
        for (let i = 0; i < listOfTreatments.length; i++){
            if (listOfTreatments[i].id === this.props.patient.id){
                listOfPatientTreatments.push(listOfTreatments[i].treatment)
            }
        }
        this.setState({
            patientTreatments: listOfPatientTreatments
        })
    }

    render(){
        return(
            this.state.patientTreatments.map(treatment => {
                let trObj = {id: this.props.patient.id, treatment}
                return(
                    <div>
                        <IndividualTreatment key={trObj.treatment + trObj.id} trObj={trObj} />
                    </div>
                );
            })
        );
    }
}

const mapStateToProps = state => {
    return({
        treatments: state.treatments
    });
}

export default connect (mapStateToProps,{
    deleteTreatment
})(EditTreatmentList);