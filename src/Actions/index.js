export const registerDoctor = (doctor) => {
    return {
        type: 'REGISTER_DOCTOR',
        payload: doctor
    };
};