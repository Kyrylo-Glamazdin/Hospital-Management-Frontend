import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {deleteTreatment} from '../../Actions';
import IndividualTreatment from './IndividualTreatment.js';

class EditTreatmentList extends PureComponent{
    constructor(props){
        super(props);
    }

    render(){
        let toRender = this.props.treatments.filter(pt => (pt.id === this.props.patient.id));
        if (toRender.length > 0){
            return(
                toRender.map(tr => {
                    let trObj = {id: this.props.patient.id, treatment:tr.treatment}
                    return(
                        <div>
                            <IndividualTreatment trObj={trObj} />
                        </div>
                    );
                })
                
            );
        }
        else{
            return(
                <div>The patient currently receives no treatments</div>
            );
        }
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