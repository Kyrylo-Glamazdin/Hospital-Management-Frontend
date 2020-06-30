import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {addSymptom} from '../../Actions';
import EditSymptomList from './EditSymptomList.js';
import axios from 'axios';
import '../../Styles/Patients/EditTreatmentListWrapper.css';

class EditSymptomListWrapper extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            newSymptom: ""
        }
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onSubmitHandler(event){
        event.preventDefault();
        let enteredSymptom = this.state.newSymptom;
        let patientId = this.props.patient.id;
        let newSymptomObj = {id: patientId, symptom: enteredSymptom}
        this.props.addSymptom(newSymptomObj);

        axios.post('http://localhost:4100/api/symptoms', newSymptomObj)
            .then(res => {
                console.log(res)
            })

        this.setState({newSymptom: ""})
    }

    onChangeHandler(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div className="treatment-edit-wrapper">
                <EditSymptomList patient={this.props.patient}/>
                <form onSubmit={this.onSubmitHandler}>
                    <label className="standard-treatment-label">Add New Symptom:
                        <input className="standard-treatment-input" name="newSymptom" onChange={this.onChangeHandler} value={this.state.newSymptom}/>
                    </label>
                    <input className="add-treatment-button" type="submit" value="Add Symptom"/>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return({
        symptoms: state.symptoms
    });
}

export default connect (mapStateToProps,{
    addSymptom
})(EditSymptomListWrapper);