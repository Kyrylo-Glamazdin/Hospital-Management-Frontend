import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class MainPage extends Component{
    render(){
        return(
            <div className="selection-options">
                <Link to="/">Home</Link>
                <Link to="/doctors">Manage Doctors</Link>
                <Link to="/patients">Manage Patients</Link>
            </div>
        );
    }
}

export default MainPage;