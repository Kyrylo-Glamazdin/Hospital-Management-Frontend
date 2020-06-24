import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {deleteSymptom} from '../../Actions';
import IndividualSymptom from './IndividualSymptom.js';

class EditSymptomList extends PureComponent{
    constructor(props){
        super(props);
    }

    render(){
        let toRender = this.props.symptoms.filter(pt => (pt.id === this.props.patient.id));
        if (toRender.length > 0){
            return(
                toRender.map(tr => {
                    let trObj = {id: this.props.patient.id, symptom:tr.symptom}
                    return(
                        <div>
                            <IndividualSymptom trObj={trObj} />
                        </div>
                    );
                })
                
            );
        }
        else{
            return(
                <div>The patient currently has no symptoms</div>
            );
        }
    }
}

const mapStateToProps = state => {
    return({
        symptoms: state.symptoms
    });
}

export default connect (mapStateToProps,{
    deleteSymptom
})(EditSymptomList);