import React, { Component } from "react";

export default class Widget extends Component {
  state = {
    "check-in": "",
    "check-out": "",
    CID: "",
    CIM: "",
    CIY: "",
    COD: "",
    COM: "",
    COY: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.formatInput();
    });
  };

  getToday = () => {
    let date = new Date();
    let month = date.getMonth() + 1;
    let formattedMonth = month.toString().length < 2 ? "0" + month : month;
    return date.getFullYear() + "-" + formattedMonth + "-" + date.getDate();
  };

  formatInput = () => {
    let CID = this.state["check-in"].split("-")[2];
    let CIM = this.state["check-in"].split("-")[1];
    let CIY = this.state["check-in"].split("-")[0];
    let COD = this.state["check-out"].split("-")[2];
    let COM = this.state["check-out"].split("-")[1];
    let COY = this.state["check-out"].split("-")[0];
    this.setState({
      CID,
      CIM,
      CIY,
      COD,
      COM,
      COY
    });
  };

  beforeSubmit = e => {
    e.preventDefault();
    document.querySelector(".modal").classList.add("active");
  };
  policyClicked = e => {
    document.querySelector(".modal").classList.remove("active");
    document.querySelector(".before-submit").style.display = "none";
    document.querySelector(".submit").style.display = "block";
  };

  render() {
    let today = this.getToday();

    return (
      <section className="widget-section">
        <h2 className="sub-title">Reservations</h2>
        <div className="modal">
          <h2>Please read the PDF before booking.</h2>
          <a
            href="https://foundrysuites.s3.amazonaws.com/NewFoundrySuitesHotelRulesPolicies.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={this.policyClicked}
          >
            New Hotel Policy
          </a>
        </div>
        <form
          className="booking-widget"
          action="https://us01.iqwebbook.com/FSBBUF735/Integration/Search"
          method="POST"
          name="SearchForm"
        >
          <div className="form-group">
            <div className="field">
              <label htmlFor="AD">Adults</label>
              <input type="number" min="1" max="4" name="AD" required />
            </div>
            <div className="field">
              <label htmlFor="CH">Children</label>
              <input type="number" min="1" max="3" name="CH" required />
            </div>
          </div>
          <div className="form-group">
            <div className="field">
              <label htmlFor="check-in">Check-in Day</label>
              <input
                type="date"
                min={today}
                name="check-in"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="check-out">Check-out Day</label>
              <input
                type="date"
                min={
                  this.state["check-in"] !== "" ? this.state["check-in"] : today
                }
                name="check-out"
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <input type="hidden" defaultValue={this.state.CID} name="CID" />
          <input type="hidden" defaultValue={this.state.CIM} name="CIM" />
          <input type="hidden" defaultValue={this.state.CIY} name="CIY" />
          <input type="hidden" defaultValue={this.state.COD} name="COD" />
          <input type="hidden" defaultValue={this.state.COM} name="COM" />
          <input type="hidden" defaultValue={this.state.COY} name="COY" />
          <input type="hidden" name="UF1" />
          <input type="hidden" name="UF2" />
          <input type="hidden" name="LG" />
          <input type="hidden" name="RMS" value="1" />
          <button
            type="submit"
            className="before-submit"
            onClick={this.beforeSubmit}
          >
            Book Now
          </button>
          <button type="submit" className="submit">
            Book Now
          </button>
        </form>
      </section>
    );
  }
}
