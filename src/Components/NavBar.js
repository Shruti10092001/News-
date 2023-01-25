// import PropTypes from 'prop-types'
import React, { Component } from "react";

export class NavBar extends Component {
  //   static propTypes = {}

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand mx-5" href="/">
            News-App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Genral
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Helth
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Science
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Technology
                </a>
              </li>
              
            </ul>
            
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
