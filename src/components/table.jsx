import React, { Component } from "react";
import "./styles/table.css";

class Table extends Component {
  render() {
    return (
      <div className={this.props.darkMode ? "dark-mode" : "light-mode"}>
        <table className="table table-borderless">
          <thead>
            <tr>
              <th></th>
              <th>Alarm Name</th>
              <th>Triggered Time</th>
              <th>Reset Time</th>
              <th>Severity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                4 <i className="fas fa-chevron-down"></i>
              </td>
              <td>Safety Door Open - Front</td>
              <td>12:30 IST | 28 Aug 2019</td>
              <td>--</td>
              <td style={{ color: "#eb4034" }}>CRITICAL</td>
              <td>
                <i className="fas fa-ellipsis-h"></i>
              </td>
            </tr>
            <tr>
              <td>
                2 <i className="fas fa-chevron-down"></i>
              </td>
              <td>A</td>
              <td>12:30 IST | 28 Aug 2019</td>
              <td>--</td>
              <td style={{ color: "#f7a01e" }}>MAJOR</td>
              <td>
                <i className="fas fa-ellipsis-h"></i>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>B</td>
              <td></td>
              <td></td>
              <td>MINOR</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>C</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>D</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>E</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>F</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>G</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>H</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
