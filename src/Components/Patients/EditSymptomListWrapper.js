import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {addSymptom} from '../../Actions';
import EditSymptomList from './EditSymptomList.js';

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
        this.setState({newSymptom: ""})
    }

    onChangeHandler(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div>
                <EditSymptomList patient={this.props.patient}/>
                <form onSubmit={this.onSubmitHandler}>
                    <label>Add New Symptom:
                        <input name="newSymptom" onChange={this.onChangeHandler} value={this.state.newSymptom}/>
                    </label>
                    <input type="submit" value="Add Symptom"/>
                </form><br/>
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