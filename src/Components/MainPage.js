import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../Styles/MainPage.css'

class MainPage extends Component{
    render(){
        return(
            <div className="selection-options">
                <Link className="nav-button-left" to="/">Home</Link>
                <div className="right-buttons">
                    <Link className="nav-button-right" to="/patients">Manage Patients</Link>
                    <Link className="nav-button-right" to="/doctors">Manage Doctors</Link>
                </div>
            </div>
        );
    }
}

export default MainPage;