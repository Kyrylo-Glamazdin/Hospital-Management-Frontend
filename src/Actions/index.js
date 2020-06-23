export const registerDoctor = doctor => {
    return {
        type: 'REGISTER_DOCTOR',
        payload: doctor
    };
};

export const editDoctor = doctor => {
    return {
        type: "EDIT_DOCTOR",
        payload: doctor
    };
};

export const deleteDoctor = doctor => {
    return{
        type: "DELETE_DOCTOR",
        payload: doctor
    };
};

export const registerPatient = doctor => {
    return {
        type: 'REGISTER_PATIENT',
        payload: doctor
    };
};

export const editPatient = doctor => {
    return {
        type: "EDIT_PATIENT",
        payload: doctor
    };
};

export const deletePatient = doctor => {
    return{
        type: "DELETE_PATIENT",
        payload: doctor
    };
};

export const addSymptom = symptomObj => {
    return{
        type: "ADD_SYMPTOM",
        payload: symptomObj
    };
};

export const deleteSymptom = symptomObj => {
    return{
        type: "ADD_SYMPTOM",
        payload: symptomObj
    };
};

export const addTreatment = treatmentObj => {
    return{
        type: "ADD_SYMPTOM",
        payload: treatmentObj
    };
};

export const deleteTreatment = treatmentObj => {
    return{
        type: "ADD_TREATMENT",
        payload: treatmentObj
    };
};