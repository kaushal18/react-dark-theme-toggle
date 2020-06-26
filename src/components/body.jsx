import React, { Component } from "react";
import Table from "./table";
import "./styles/body.css";

class Body extends Component {
  render() {
    const { darkMode, setDarkMode } = this.props;

    return (
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <div className="row mt-2">
            <div className="col-sm-4">
              Condition monitoring &gt; Protab 300-NXT/Serial Number{" "}
              <i className="far fa-star"></i>
            </div>
            <div className="col-sm-4 text-center">
              Light Theme{"   "}
              <i
                className={darkMode ? "fas fa-toggle-on" : "fas fa-toggle-off"}
                onClick={() => setDarkMode((prevState) => !prevState)}
              ></i>
              {"   "}
              Dark Theme
            </div>
            <div className="col-sm-4 text-right">
              <button type="button" className="btn btn-sm prev-next-btn">
                <i className="fas fa-long-arrow-alt-left"></i> {"  "}Previous
              </button>{" "}
              <button type="button" className="btn btn-sm prev-next-btn">
                Next {"  "} <i className="fas fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>

          <div className="row mt-2 text-center" id="tabs">
            <div className="col-sm-1">Overview</div>
            <div className="col-sm-1">KPI</div>
            <div className="col-sm-1 selected">Alarms</div>
            <div className="col-sm-1">Diagnostic</div>
            <div className="col-sm-1">Analytics</div>
            <div className="col-sm-1">Reports</div>
            <div className="col-sm-1">Machine Info</div>
            <div className="col-sm-1">Customize</div>
          </div>

          <Table darkMode={darkMode} />
        </div>
      </div>
    );
  }
}

export default Body;
