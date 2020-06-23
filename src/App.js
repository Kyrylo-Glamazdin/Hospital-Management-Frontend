import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import MainPage from './Components/MainPage.js';

import DoctorsView from './Components/Doctors/DoctorsView.js';
import DoctorRegistrationForm from './Components/Doctors/DoctorRegistrationForm.js';
import DoctorEditForm from './Components/Doctors/DoctorEditForm.js';
import IndividualDoctor from './Components/Doctors/IndividualDoctor.js';

import PatientsView from './Components/Patients/PatientsView.js';
import PatientRegistrationForm from './Components/Patients/PatientRegistrationForm.js';
import PatientEditForm from './Components/Patients/PatientEditForm.js';
import IndividualPatient from './Components/Patients/IndividualPatient.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      doctors: [],
      patients: []
    }

    this.loadDoctors = this.loadDoctors.bind(this);
    this.loadPatients = this.loadPatients.bind(this);
    this.loadSymptoms = this.loadSymptoms.bind(this);
    this.loadDiagnoses = this.loadDiagnoses.bind(this);
    this.loadPatientDoctorRelations = this.loadPatientDoctorRelations.bind(this);

  }


  //this will be used upon the initial loading of the app. it will load info about doctors and patients from the database
  componentDidMount(){
    this.loadDoctors();
    this.loadPatients();
    this.loadSymptoms();
    this.loadDiagnoses();
    this.loadPatientDoctorRelations();
  }

  //loads doctors info from the database
  loadDoctors(){
    //to be implemented once the database is set up
  }
  //loads patients info from the database
  loadPatients(){
    //to be implemented once the database is set up
  }
  //loads patient symptoms from the database
  loadSymptoms(){

  }
  //loads patient diagnoses from the database
  loadDiagnoses(){

  }
  //loads relations between doctors and patients
  loadPatientDoctorRelations(){

  }

  render(){
    //getting components for the router
    const MainPageComponent = () => (<MainPage/>)

    const DoctorsViewComponent = () => (<DoctorsView/>)
    const DoctorRegistrationFormComponent = () => (<DoctorRegistrationForm/>)

    const PatientsViewComponent = () => (<PatientsView/>)
    const PatientRegistrationFormComponent = () => (<PatientRegistrationForm/>)

    return( 
      <div className="main-app">
        <Router>
          <Route path = "/" render={MainPageComponent} />
          <Switch>
            <Route exact path = "/doctors" component={DoctorsViewComponent} />
            <Route exact path = "/doctorRegistrationForm" component = {DoctorRegistrationFormComponent}/>

            <Route exact path = "/patients" render={PatientsViewComponent}/>
            <Route exact path = "/patientRegistrationForm" component = {PatientRegistrationFormComponent}/>

            {this.props.doctors.map(doctor => {
              return(
                <Route exact path ={"/doctors/" + doctor.id + "/edit"}
                  render={() => {
                    return <DoctorEditForm doctor={doctor}/>
                  }}
                />
              );
            })}

            {this.props.doctors.map(doctor => {
              return(
                <Route exact path = {"/doctors/" + doctor.id}
                  render={() => {
                  return(
                    <IndividualDoctor
                      doctor={doctor}
                    />
                  );
                }}/>
              );
            })}

            {this.props.patients.map(patient => {
              return(
                <Route exact path ={"/patients/" + patient.id + "/edit"}
                  render={() => {
                    return <PatientEditForm patient={patient}/>
                  }}
                />
              );
            })}

            {this.props.patients.map(patient => {
              return(
                <Route exact path = {"/patients/" + patient.id}
                  render={() => {
                  return(
                    <IndividualPatient
                      patient={patient}
                    />
                  );
                }}/>
              );
            })}
          </Switch>
        </Router>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return{
    doctors: state.doctors,
    patients: state.patients
  };
}

export default connect (mapStateToProps, {

})(App);
