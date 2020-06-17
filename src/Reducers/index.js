import {combineReducers} from 'redux';

let doctors = [
    {id: 1, name: "Doctor 1", specialty: "Neurologist", phone: "212-632-1923", image: ""},
    {id: 2, name: "Doctor 2", specialty: "Dermatologist", phone: "718-773-6236", image: ""},
    {id: 3, name: "Doctor 3", specialty: "Psychologist", phone: "929-645-2145", image: ""},
    {id: 4, name: "Doctor 4", specialty: "Surgeon", phone: "347-153-7453", image: ""},
    {id: 5, name: "Doctor 5", specialty: "Pediatrician", phone: "212-126-1753", image: ""}
];

const doctorsReducer = (oldDoctors = doctors, action) => {
    switch(action.type){
        case "REGISTER_DOCTOR":
            return oldDoctors.concat(action.payload);
        default:
            return oldDoctors;
    }
}

export default combineReducers({doctors: doctorsReducer});