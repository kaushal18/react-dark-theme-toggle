import React, { Component } from "react";
import "./styles/navBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className={this.props.darkMode ? "dark-mode" : "light-mode"}>
        <nav className="navbar navbar-expand-lg navbar-custom">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link">
                  <i className="far fa-bell"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  Head <i className="fas fa-chevron-down"></i>
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
