import {combineReducers} from 'redux';
import standard_doctor_image_1 from '../Styles/Images/standard_doc_img_1.png';
import standard_patient_image_1 from '../Styles/Images/patient-standard-img.png';

let doctors = [
];

let patients = [
];

//patient ID is mapped to their symptom
let symptoms = [
    
];

//patient ID is mapped to their treatment
let treatments = [
    
];

//doctor id is mapped to patient id to see which patient is treated by which doctor
let doctorPatientRelations = [
   
];

let nextDoctorId = 1;
let nextPatientId = 1;

const doctorsReducer = (oldDoctors = doctors, action) => {
    switch(action.type){
        case "REGISTER_DOCTOR":
            // action.payload.id = nextDoctorId;
            if (action.payload.image === ""){
                action.payload.image = standard_doctor_image_1;
            }
            nextDoctorId++;
            return oldDoctors.concat(action.payload);
        case "EDIT_DOCTOR":
            for (let i = 0; i < oldDoctors.length; i++){
                if (oldDoctors[i].id === action.payload.id){
                    oldDoctors[i] = action.payload;
                    return oldDoctors;
                }
            }
        case "DELETE_DOCTOR":
            return oldDoctors.filter(doctor => (doctor.id !== action.payload.id));
        default:
            return oldDoctors;
    }
}

const patientsReducer = (oldPatients = patients, action) => {
    switch(action.type){
        case "REGISTER_PATIENT":
            // action.payload.id = nextPatientId;
            if (action.payload.image === ""){
                action.payload.image = standard_patient_image_1;
            }
            nextPatientId++;
            return oldPatients.concat(action.payload);
        case "EDIT_PATIENT":
            for (let i = 0; i < oldPatients.length; i++){
                if (oldPatients[i].id === action.payload.id){
                    oldPatients[i] = action.payload;
                    return oldPatients;
                }
            }
        case "DELETE_PATIENT":
            return oldPatients.filter(patient => (patient.id !== action.payload.id));
        default:
            return oldPatients;
    }
}


const symptomsReducer = (oldSymptoms = symptoms, action) => {
    switch(action.type){
        case "ADD_SYMPTOM":
            return oldSymptoms.concat(action.payload);
        case "DELETE_SYMPTOM":
        return oldSymptoms.filter(symptomObj => (symptomObj.id !== action.payload.id || symptomObj.symptom !== action.payload.symptom));
        default:
            return oldSymptoms;
    }
}

const treatmentsReducer = (oldTreatments = treatments, action) => {
    switch(action.type){
        case "ADD_TREATMENT":
            return oldTreatments.concat(action.payload);
        case "DELETE_TREATMENT":
            return oldTreatments.filter(treatmentObj => (treatmentObj.id !== action.payload.id || treatmentObj.treatment !== action.payload.treatment));
        default:
            return oldTreatments;
    }
}

const doctorPatientReducer = (oldRelations = doctorPatientRelations, action) => {
    switch(action.type){
        case "ADD_RELATION":
            return oldRelations.concat(action.payload);
        case "DELETE_RELATION":
            return oldRelations.filter(relationObj => (relationObj.dId !== action.payload.dId || relationObj.pId !== action.payload.pId));
        default:
            return oldRelations;
    }
}

const nextPatientIdReducer = (oldPatientId = nextPatientId, action) => {
    switch(action.type){
        case "GET_NEXT_PATIENT_ID":
            return oldPatientId;
        default:
            return oldPatientId;
    }
}

export default combineReducers({
    doctors: doctorsReducer,
    patients: patientsReducer,
    symptoms: symptomsReducer,
    treatments: treatmentsReducer,
    doctorPatientRelations: doctorPatientReducer,
    nextPatientId: nextPatientIdReducer
});