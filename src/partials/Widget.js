import React, { Component } from "react";

export default class Widget extends Component {
  state = {
    "check-in": "",
    "check-out": ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getToday = () => {
    let date = new Date();
    let month = date.getMonth() + 1;
    let formattedMonth = month.toString().length < 2 ? "0" + month : month;
    return date.getFullYear() + "-" + formattedMonth + "-" + date.getDate();
  };

  render() {
    let today = this.getToday();

    return (
      <form
        action="https://us01.iqwebbook.com/FSBBUF735/Integration/Search"
        method="POST"
        name="SearchForm"
      >
        <div className="form-group">
          <label htmlFor="AD">Adults</label>
          <input type="number" max="4" min="1" name="AD" />
          <label htmlFor="CH">Children</label>
          <input type="number" max="3" min="1" name="CH" />
          <label htmlFor="check-in">Check-in Day</label>
          <input
            type="date"
            min={today}
            name="check-in"
            onChange={this.handleChange}
          />
          <label htmlFor="check-out">Check-out Day</label>
          <input
            type="date"
            min={this.state.CID}
            name="check-out"
            onChange={this.handleChange}
          />
        </div>
        <input type="hidden" value={this.state.CID} />
        <input type="hidden" name="UF1" />
        <input type="hidden" name="UF2" />
        <input type="hidden" name="LG" />
        <input type="hidden" name="RMS" value="1" />
        <button type="submit">Check Availability</button>
      </form>
    );
  }
}
