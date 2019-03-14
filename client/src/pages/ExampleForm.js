import React, { Component } from 'react';
import API from "../utils/API";
import PropTypes from 'prop-types';

class ExampleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      company: "",
      city: "",
      position: "",
      phone: "",
      email: "",
      how: ""
    };
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  submitExample = (event) => {
    event.preventDefault();

    const name = this.state.name.trim();
    const city = this.state.city.trim();
    const company = this.state.company.trim();
    const position = this.state.position.trim();
    const phone = this.state.phone.trim();
    const email = this.state.email.trim();
    const how = this.state.how.trim();

    if (this.areInputsValid(name, city)) {
      API.saveExample({
        name,
        company,
        city,
        position,
        phone,
        email,
        how
      }).then(() => {
        this.props.history.push('/');
      });
    }
  }

  areInputsValid = (name, city) => {
    if (!name) {
      alert("Please fill out the name");
      return false;
    }

    if (!city) {
      alert("Please fill out the city");
      return false;
    }

    return true;
  }

  render() {
    const name = this.state.name;
    const city = this.state.city;
    const company = this.state.company;
    const position = this.state.position;
    const phone = this.state.phone;
    const email = this.state.email;
    const how = this.state.how;

    return (
      <form className="container" onSubmit={this.submitExample}>

        <h1>Basic Info</h1>

        <div className="form-group">
          <label
            htmlFor="name">
            Name:
          </label>
          <input
            className="form-control"
            name="name"
            type="text"
            placeholder="name"
            onChange={this.handleInputChange}
            value={name} />
        </div>

        <div className="form-group">
          <label
            htmlFor="company">
            Company:
          </label>
          <input
            className="form-control"
            name="company"
            type="text"
            placeholder="company"
            onChange={this.handleInputChange}
            value={company} />
        </div>

        <div className="form-group">
          <label
            htmlFor="city">
            City:
          </label>
          <input
            className="form-control"
            name="city"
            placeholder="city"
            onChange={this.handleInputChange}
            value={city} />
        </div>

        <div className="form-group">
          <label
            htmlFor="position">
            Position:
          </label>
          <input
            className="form-control"
            name="position"
            placeholder="position"
            onChange={this.handleInputChange}
            value={position} />
        </div>

        <div className="form-group">
          <label
            htmlFor="phone">
            Phone:
          </label>
          <input
            className="form-control"
            name="phone"
            placeholder="phone"
            onChange={this.handleInputChange}
            value={phone} />
        </div>

        <div className="form-group">
          <label
            htmlFor="email">
            Email:
          </label>
          <input
            className="form-control"
            name="email"
            placeholder="email"
            onChange={this.handleInputChange}
            value={email} />
        </div>

        <div className="form-group">
          <label
            htmlFor="how">
            How did they hear about us:
          </label>
          <input
            className="form-control"
            name="how"
            placeholder="Facebook, phone, email, friend"
            onChange={this.handleInputChange}
            value={how} />
        </div>

        <button
          className="btn btn-primary"
          type="submit">
          Submit
        </button>
      </form>
      <form className="container" onSubmit={this.submitExample}>
        );
      }
    }
    
    export default ExampleForm;
