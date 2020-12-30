import React, { Component } from "react";

export class Field extends Component {
  constructor(props) {
    super(props);
    this.label = "Nama Toko";
    switch (this.props.label) {
      case "nama":
        this.label = "Nama";
        break;
      case "limit":
        this.label = "Limit";
        break;
      case "overlimit":
        this.label = "Overlimit";
        break;
      case "soots":
        this.label = "SO Ots";
        break;
      case "overdue":
        this.label = "Overdue";
        break;
      case "keterangan":
        this.label = "Keterangan";
        break;
      case "finance":
        this.label = "Finance";
        break;
      default:
        this.label = "";
        break;
    }
  }
  render() {
    return (
      <div className="field">
        <label className="inputLabel" htmlFor={this.props.label}>
          {this.label}
        </label>
        <input
          className="inputField"
          type={this.props.type}
          id={this.props.label}
          name={this.props.label}
          onChange={(e) => this.props.handler(e)}
        />
      </div>
    );
  }
}

export default Field;
