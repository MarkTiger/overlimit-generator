import React, { Component } from "react";

export class OrderSub extends Component {
  render() {
    return (
      <div className="field">
        <label
          className="inputLabel"
          htmlFor={this.props.label + this.props.id}
        ></label>
        <input
          className="inputField"
          type={this.props.type}
          id={this.props.label + this.props.id}
          name={this.props.label + this.props.id}
          onInput={(e) => this.props.handler(e, this.props.id)}
          onChange={(e) => this.props.addField(e, this.props.id)}
        />
      </div>
    );
  }
}

export default OrderSub;
