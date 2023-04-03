import React  from 'react';
// import {Route, Redirect, HashRouter} from "react-router-dom";
import Navigation from '../components/Navigation';


function Header() {
    return (
        <div className="container">
        <h1>Karinne Sagir</h1>
        {/* <ul className="parent">
            <li>About Me</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <li>Resume</li>
        </ul> */}
        <Navigation/>
        </div>
    )
}

export default Header;