import React from 'react';
import {connect} from 'react-redux';
import {deleteSymptom} from '../../Actions'

class IndividualSymptom extends React.Component{
        constructor(props){
            super(props)
        }
        render(){
        return(
            <div>
                {this.props.trObj.symptom}
                <button onClick={() => this.props.deleteSymptom(this.props.trObj)}>Remove</button>
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
    deleteSymptom
})(IndividualSymptom);