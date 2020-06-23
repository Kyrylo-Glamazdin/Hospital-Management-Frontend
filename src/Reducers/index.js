import {combineReducers} from 'redux';

let doctors = [
    {id: 1, name: "Doctor 1", specialty: "Neurologist", department: "Neurology", phone: "212-632-1923", image: ""},
    {id: 2, name: "Doctor 2", specialty: "Dermatologist", department: "Dermatology", phone: "718-773-6236", image: ""},
    {id: 3, name: "Doctor 3", specialty: "Psychologist", department: "Psychology" ,phone: "929-645-2145", image: ""},
    {id: 4, name: "Doctor 4", specialty: "Surgeon", department: "Department of Surgery", phone: "347-153-7453", image: ""},
    {id: 5, name: "Doctor 5", specialty: "Pediatrician", department: "Family Medicine", phone: "212-126-1753", image: ""}
];

let patients = [
    {id: 1, name: "Patient 1", diagnosis: "Cold", department: "Family Medicine", phone: "212-632-1923", image: ""},
    {id: 2, name: "Patient 2", diagnosis: "Anxiety Disorder", department: "Psychology", phone: "718-773-6236", image: ""},
    {id: 3, name: "Patient 3", diagnosis: "Tourette Syndrome", department: "Neurology", phone: "929-645-2145", image: ""},
    {id: 4, name: "Patient 4", diagnosis: "Idk", department: "Idk Dept", phone: "347-153-7453", image: ""},
    {id: 5, name: "Patient 5", diagnosis: "Idk2", department: "Idk2 Dept", phone: "212-126-1753", image: ""}
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

//doctor id is mapped to patient id to see which patient is treated by which doctor
let doctorPatientRelations = [
    {dId: 1, pId: 3},
    {dId: 5, pId: 1},
    {dId: 3, pId: 2}
];

let nextDoctorId = 6;
let nextPatientId = 6;

const doctorsReducer = (oldDoctors = doctors, action) => {
    switch(action.type){
        case "REGISTER_DOCTOR":
            action.payload.id = nextDoctorId;
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
            action.payload.id = nextPatientId;
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
        case "REMOVE_RELATION":
            return oldRelations.filter(relationObj => (relationObj.dId !== action.payload.dId || relationObj.pId !== action.payload.pId));
        default:
            return oldRelations;
    }
}

export default combineReducers({
    doctors: doctorsReducer,
    patients: patientsReducer,
    symptoms: symptomsReducer,
    treatments: treatmentsReducer,
    doctorPatientRelations: doctorPatientReducer
});