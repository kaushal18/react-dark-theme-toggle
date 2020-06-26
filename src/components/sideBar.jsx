import React, { Component } from "react";
import "./styles/sideBar.css";

class SideBar extends Component {
  render() {
    return (
      <div
        className={this.props.darkMode ? "dark-mode" : "light-mode"}
        id="sidebar-wrapper"
      >
        <div className="list-group list-group-flush">
          <a className="list-group-item border-0">
            <i className="fas fa-home"></i>
          </a>
          <a className="list-group-item" id="selected">
            <i className="fas fa-tachometer-alt"></i>
          </a>
          <a className="list-group-item border-0">
            <i className="fas fa-chart-bar"></i>
          </a>
          <a className="list-group-item border-0">
            <i className="fas fa-tools"></i>
          </a>
          <a className="list-group-item border-0">
            <i className="fas fa-bell"></i>
          </a>
          <a className="list-group-item border-0">
            <i className="fas fa-file-alt"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default SideBar;
