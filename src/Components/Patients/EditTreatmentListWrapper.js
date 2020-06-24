import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {addTreatment} from '../../Actions';
import EditTreatmentList from './EditTreatmentList.js';

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
        this.setState({newTreatment: ""})
    }

    onChangeHandler(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div>
                <EditTreatmentList patient={this.props.patient}/>
                <form onSubmit={this.onSubmitHandler}>
                    <label>Add New Treatment:
                        <input name="newTreatment" onChange={this.onChangeHandler} value={this.state.newTreatment}/>
                    </label>
                    <input type="submit" value="Add Treatment"/>
                </form><br/>
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