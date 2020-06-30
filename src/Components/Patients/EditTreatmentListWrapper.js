import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {addTreatment} from '../../Actions';
import axios from 'axios';
import EditTreatmentList from './EditTreatmentList.js';
import '../../Styles/Patients/EditTreatmentListWrapper.css';

class EditTreatmentListWrapper extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            newTreatment: ""
        }
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onSubmitHandler(event){
        event.preventDefault();
        let enteredTreatment = this.state.newTreatment;
        let patientId = this.props.patient.id;
        let newTreatmentObj = {id: patientId, treatment: enteredTreatment}
        this.props.addTreatment(newTreatmentObj);

        axios.post('http://localhost:4100/api/treatments', newTreatmentObj)
            .then(res => {
                console.log(res)
            })

        this.setState({newTreatment: ""})
    }

    onChangeHandler(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div className="treatment-edit-wrapper">
                <EditTreatmentList patient={this.props.patient}/>
                <form onSubmit={this.onSubmitHandler}>
                    <label className="standard-treatment-label">Add New Treatment:
                        <div>
                            <input className="standard-treatment-input" name="newTreatment" onChange={this.onChangeHandler} value={this.state.newTreatment}/>
                        </div>
                    </label>
                    <input className="add-treatment-button" type="submit" value="Add Treatment"/>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return({
        treatments: state.treatments
    });
}

export default connect (mapStateToProps,{
    addTreatment
})(EditTreatmentListWrapper);