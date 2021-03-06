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
        type: "DELETE_SYMPTOM",
        payload: symptomObj
    };
};

export const addTreatment = treatmentObj => {
    return{
        type: "ADD_TREATMENT",
        payload: treatmentObj
    };
};

export const deleteTreatment = treatmentObj => {
    return{
        type: "DELETE_TREATMENT",
        payload: treatmentObj
    };
};


export const addRelation = relationObj => {
    return{
        type: "ADD_RELATION",
        payload: relationObj
    };
};

export const deleteRelation = relationObj => {
    return{
        type: "DELETE_RELATION",
        payload: relationObj
    };
};

export const getNextPatientId = () => {
    return{
        type: "GET_NEXT_PATIENT_ID"
    };
};