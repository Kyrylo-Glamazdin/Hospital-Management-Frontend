import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import {registerDoctor, registerPatient, addRelation, addSymptom, addTreatment} from './Actions';

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
    this.loadTreatments = this.loadTreatments.bind(this);
    this.loadPatientDoctorRelations = this.loadPatientDoctorRelations.bind(this);

  }


  //this will be used upon the initial loading of the app. it will load info about doctors and patients from the database
  componentDidMount(){
    this.loadDoctors();
    this.loadPatients();
    this.loadSymptoms();
    this.loadTreatments();
    this.loadPatientDoctorRelations();
  }

  //loads doctors info from the database
  async loadDoctors(){
    await axios.get('http://localhost:4100/api/doctors')
    .then (res => {

      let result = res.data;
      for (let i = 0; i < result.length; i++){
        let newDoctor = {
          id: result[i].doctor_id,
          name: result[i].doctor_name,
          specialty: result[i].speciality,
          department: result[i].doctor_dept,
          phone: result[i].doctor_phone,
          email: result[i].doctor_email,
          image: result[i].doctor_img
        }
        this.props.registerDoctor(newDoctor);
      }
    })
    .catch(err => console.log(err));
  }
  //loads patients info from the database
  async loadPatients(){
    await axios.get('http://localhost:4100/api/patients')
    .then (res => {

      let result = res.data;
      for (let i = 0; i < result.length; i++){
        let newPatient = {
          id: result[i].patient_id,
          name: result[i].patient_name,
          diagnosis: result[i].diagnosis,
          department: result[i].patient_dept,
          phone: result[i].patient_phone,
          email: result[i].patient_email,
          image: result[i].patient_img
        }
        this.props.registerPatient(newPatient);
      }
    })
    .catch(err => console.log(err));
  }
  //loads patient symptoms from the database
  async loadSymptoms(){
    await axios.get('http://localhost:4100/api/symptoms')
    .then (res => {

      let result = res.data;
      for (let i = 0; i < result.length; i++){
        let newSymptom = {
          id: result[i].patient_id,
          symptom: result[i].symptom
        }
        this.props.addSymptom(newSymptom);
      }
    })
    .catch(err => console.log(err));
  }
  //loads patient diagnoses from the database
  async loadTreatments(){
    await axios.get('http://localhost:4100/api/treatments')
    .then (res => {

      let result = res.data;
      for (let i = 0; i < result.length; i++){
        let newTreatment = {
          id: result[i].patient_id,
          treatment: result[i].treatment
        }
        this.props.addTreatment(newTreatment);
      }
    })
    .catch(err => console.log(err));
  }
  //loads relations between doctors and patients
  async loadPatientDoctorRelations(){
    await axios.get('http://localhost:4100/api/doctorPatient')
    .then (res => {

      let result = res.data;
      for (let i = 0; i < result.length; i++){
        let newRelation = {
          dId: result[i].doctor_id,
          pId: result[i].patient_id
        }
        this.props.addRelation(newRelation);
      }
    })
    .catch(err => console.log(err));
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
  registerDoctor, 
  registerPatient, 
  addRelation, 
  addSymptom, 
  addTreatment
})(App);
