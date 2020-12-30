import React, { Component } from "react";
import Field from "./Field";
import Order from "./Order";
import OrderSub from "./OrderSub";

export class Body extends Component {
  constructor(props) {
    super(props);
    this.addOrderField = this.addOrderField.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.generate = this.generate.bind(this);
    this.copyResult = this.copyResult.bind(this);
    this.reloadPage = this.reloadPage.bind(this);

    this.orderFieldID = 0;
    this.fieldState = [false];

    this.resultRef = React.createRef();

    this.state = {
      orderField: [
        <Order
          key={this.orderFieldID}
          id={this.orderFieldID}
          label="order"
          type="number"
          addField={this.addOrderField}
          handler={this.handleOrder}
        />,
      ],
      nama: "",
      limit: 0,
      overlimit: 0,
      soots: 0,
      order: [0],
      overdue: "",
      keterangan: "",
      finance: "",
      result: ``,
    };
  }

  addOrderField(e, id) {
    e.preventDefault();
    if (!this.fieldState[id]) {
      this.fieldState[id] = true;
      this.orderFieldID++;
      this.fieldState = [...this.fieldState, false];

      this.setState((state) => ({
        orderField: [
          ...state.orderField,
          <OrderSub
            key={this.orderFieldID}
            id={this.orderFieldID}
            label="order"
            type="number"
            addField={this.addOrderField}
            handler={this.handleOrder}
          />,
        ],
      }));
    }
  }

  handleOrder(e, id) {
    e.preventDefault();
    let orders = this.state.order;
    orders[id] = e.target.value;
    this.setState({
      order: orders,
    });
  }

  handleChange(e) {
    e.preventDefault();
    let target = e.target;
    let value = target.value;
    let field = target.name;

    this.setState({
      [field]: value,
    });
  }

  generate(e) {
    e.preventDefault();
    let result = "";
    let totalOrder = 0;
    this.state.order.forEach((order) => (totalOrder += parseInt(order)));

    result = `@whatsapp-contact
\`\`\`Nama Toko      : ${this.state.nama}
Limit Toko     : ${this.state.limit}
Overlimit      : ${
      parseInt(this.state.overlimit) +
      totalOrder -
      parseInt(this.state.order[0])
    }
SO Outstanding : ${this.state.soots}
Order          : ${totalOrder}
Overdue        : ${this.state.overdue}
${this.state.keterangan + " - " + this.state.finance}\`\`\``;

    this.setState({
      result: result,
    });
  }

  copyResult(e) {
    e.preventDefault();
    this.resultRef.current.select();
    document.execCommand("copy");
    e.target.focus();
  }

  reloadPage(e) {
    e.preventDefault();
    window.location.reload();
  }

  render() {
    return (
      <div className="appbody">
        <form className="generator">
          <Field label="nama" type="text" handler={this.handleChange} />
          <Field label="limit" type="number" handler={this.handleChange} />
          <Field label="overlimit" type="number" handler={this.handleChange} />
          <Field label="soots" type="number" handler={this.handleChange} />
          {this.state.orderField}
          <Field label="overdue" type="text" handler={this.handleChange} />
          <Field label="keterangan" type="text" handler={this.handleChange} />
          <Field label="finance" type="text" handler={this.handleChange} />
          <div className="btngroup">
            <button className="btn" onClick={this.generate}>
              Generate
            </button>
            <button className="btn" onClick={this.copyResult}>
              Copy
            </button>
            <button className="btn" onClick={this.reloadPage}>
              Clear
            </button>
          </div>
          <textarea ref={this.resultRef} value={this.state.result} readOnly />
        </form>
      </div>
    );
  }
}

export default Body;
