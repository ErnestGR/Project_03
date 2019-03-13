import React, { Component } from 'react';
import API from "../utils/API";

class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      example: {}
    };
  }

  componentDidMount() {
    API.getExample(this.props.match.params.id)
      .then(res => {
        this.setState({ example: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onDeleteClick = () => {
    const id = this.state.example._id;
    API.deleteExample(id)
      .then(() => {
        this.props.history.push('/');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const example = this.state.example;
    return (
      <div className="container">
        <article className="card">
          <div className="card-body">
            <h1 className="card-title">{example.name}</h1>
            <section className="card-text">
              <h6>Company: {example.company}</h6>
              <h6>City: {example.city}</h6>
              <h6>Position: {example.position}</h6>
              <h6>Phone: {example.phone}</h6>
              <h6>Email: {example.email}</h6>
              <h6>How: {example.how}</h6>
              <h6>{example.date}</h6>
            </section>
            <button
              className="btn btn-danger"
              onClick={this.onDeleteClick}>
              Delete
            </button>
          </div>
        </article>
      </div>
    );
  }
}

export default Example;
