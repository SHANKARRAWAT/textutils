import React from "react";
import PropTypes from 'prop-types' ;
import { Link } from "react-router-dom";
export default function Navbar(props) {
 
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/about">
                 {props.aboutUs}
                </a>
              </li> */}
           
            </ul>
          </div>
            <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
            <input className="form-check-input" type="checkbox"  onClick={props.toggleMode}  role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label " htmlFor="flexSwitchCheckDefault">dark Mode</label>
            </div>
        </div>
      </nav>

    </div>
  );
}

// it will define the types of props with the help of objects
Navbar.propTypes={
    title:PropTypes.string,
    aboutus:PropTypes.string

}
// it provides the default values of the props
Navbar.defaultpropTypes={
               title:'here is heading', 
               aboutus:'here is about your site'
}