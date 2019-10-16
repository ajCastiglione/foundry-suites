import React, { Component } from "react";

export default class Widget extends Component {
  state = {
    CID: ""
  };

  valueUpdate = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let date = new Date();
    let month = date.getMonth() + 1;
    let formattedMonth = month.toString().length < 2 ? "0" + month : month;
    let today =
      date.getFullYear() + "-" + formattedMonth + "-" + date.getDate();
    return (
      <form
        action="https://us01.iqwebbook.com/FSBBUF735/Integration/Search"
        method="POST"
        name="SearchForm">
        <div className="form-group">
          <label htmlFor="AD">Adults</label>
          <input type="number" max="4" min="1" name="AD" />
          <label htmlFor="CH">Children</label>
          <input type="number" max="3" min="1" name="CH" />
          <label htmlFor="CID">Check-in Day</label>
          <input
            type="date"
            min={today}
            name="CID"
            onChange={this.valueUpdate}
          />
          <label htmlFor="COD">Check-out Day</label>
          <input type="date" min={this.state.CID} name="COD" />
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
