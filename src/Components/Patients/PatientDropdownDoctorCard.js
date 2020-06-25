import React, {Component} from 'react';

class PatientDropdownDoctorCard extends Component{
    constructor(props){
        super(props);
        this.toggleSelection = this.toggleSelection.bind(this);
    }

    toggleSelection(){
        this.props.doctorSelect(this.props.doctor);
    }

    render(){
        if (this.props.selectedDoctor && this.props.selectedDoctor.id === this.props.doctor.id){
            return(
                <div className="selected" onClick={this.toggleSelection}>
                    {this.props.doctor.name}
                </div>
            );
        }
        else{
            return(
                <div className="nonselected" onClick={this.toggleSelection}>
                {this.props.doctor.name}
                </div>
            );
        }
    }
}

export default PatientDropdownDoctorCard;