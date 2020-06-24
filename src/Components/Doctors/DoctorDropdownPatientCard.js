import React, {Component} from 'react';

class DoctorDropdownPatientCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            selected: false
        }
        this.toggleSelection = this.toggleSelection.bind(this);
    }

    toggleSelection(){
        if (this.state.selected){
            this.props.removePatientFromDoctor(this.props.patient);
        }
        else{
            this.props.addPatientToDoctor(this.props.patient)
        }
        this.setState({selected: !this.state.selected});
    }

    render(){
        return(
            <div onClick={this.toggleSelection}>
            {this.props.patient.name}
            </div>
        );
    }
}

export default DoctorDropdownPatientCard;