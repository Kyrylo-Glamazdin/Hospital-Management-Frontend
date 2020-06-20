import {combineReducers} from 'redux';

let doctors = [
    {id: 1, name: "Doctor 1", specialty: "Neurologist", phone: "212-632-1923", image: ""},
    {id: 2, name: "Doctor 2", specialty: "Dermatologist", phone: "718-773-6236", image: ""},
    {id: 3, name: "Doctor 3", specialty: "Psychologist", phone: "929-645-2145", image: ""},
    {id: 4, name: "Doctor 4", specialty: "Surgeon", phone: "347-153-7453", image: ""},
    {id: 5, name: "Doctor 5", specialty: "Pediatrician", phone: "212-126-1753", image: ""}
];

let patients = [
    {id: 1, name: "Patient 1", diagnosis: "Cold", phone: "212-632-1923", image: ""},
    {id: 2, name: "Patient 2", diagnosis: "Anxiety Disorder", phone: "718-773-6236", image: ""},
    {id: 3, name: "Patient 3", diagnosis: "Tourette Syndrom", phone: "929-645-2145", image: ""},
    {id: 4, name: "Patient 4", diagnosis: "Idk", phone: "347-153-7453", image: ""},
    {id: 5, name: "Patient 5", diagnosis: "idk2", phone: "212-126-1753", image: ""}
];

//patient ID is mapped to their symptom
let symptoms = [
    {id: 1, symptom: "Fever"},
    {id: 1, symptom: "Tiredness"},
    {id: 2, symptom: "Fear"},
    {id: 3, symptom: "Speech Issues"},
    {id: 2, symptom: "Tiredness"},
    {id: 4, symptom: "S1"},
    {id: 5, symptom: "S2"}
];

//patient ID is mapped to their treatment
let treatments = [
    {id: 1, treatment: "TR1"},
    {id: 1, treatment: "TR2"},
    {id: 1, treatment: "TR3"},
    {id: 2, treatment: "TR1"},
    {id: 2, treatment: "TR5"},
    {id: 3, treatment: "TR5"},
    {id: 4, treatment: "TR4"},
    {id: 4, treatment: "TR6"},
];

const doctorsReducer = (oldDoctors = doctors, action) => {
    switch(action.type){
        case "REGISTER_DOCTOR":
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
            return oldSymptoms.filter(symptomObj => (symptomObj.id === action.payload.id && symptomObj.symptom === action.payload.symptom));
        default:
            return oldSymptoms;
    }
}

const treatmentsReducer = (oldTreatments = treatments, action) => {
    switch(action.type){
        case "ADD_TREATMENT":
            return oldTreatments.concat(action.payload);
        case "DELETE_TREATMENT":
            return oldTreatments.filter(treatmentObj => (treatmentObj.id === action.payload.id && treatmentObj.treatment === action.payload.treatment));
        default:
            return oldTreatments;
    }
}

export default combineReducers({
    doctors: doctorsReducer,
    patients: patientsReducer,
    symptoms: symptomsReducer,
    treatments: treatmentsReducer
});