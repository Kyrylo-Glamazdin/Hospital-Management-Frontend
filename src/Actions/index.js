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