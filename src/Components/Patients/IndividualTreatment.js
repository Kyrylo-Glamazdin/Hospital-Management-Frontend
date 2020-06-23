import React from 'react';
import {connect} from 'react-redux';
import {deleteTreatment} from '../../Actions'

class IndividualTreatment extends React.Component{
        constructor(props){
            super(props)
        }
        render(){
        return(
            <div>
                {this.props.trObj.treatment}
                <button onClick={() => this.props.deleteTreatment(this.props.trObj)}>Remove</button>
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
    deleteTreatment
})(IndividualTreatment);