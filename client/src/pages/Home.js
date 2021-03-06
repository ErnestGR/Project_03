import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      examples: [],
      name: "",
      city: ""
    };
  }

  componentDidMount() {
    this.loadExamples();
  }

  loadExamples = () => {
    API.getExamples()
      .then(res => {
        this.setState({ examples: res.data, name: "", city: "" });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getExamplesAsList = () => {
    const examples = this.state.examples;

    const listElements = examples.map((element) => {
      return (
        <li key={element._id}>
          <Link to={`/example/${element._id}`}>
            <p>
              {element.name}
            </p>
          </Link>
        </li>
      );
    });

    if (listElements.length === 0)
      return <h3>No Results to Display</h3>;

    return <ul>{listElements}</ul>;
  }


  render() {
    const examplesList = this.getExamplesAsList();
    return (
      <div className="container">
        <h1>Clients</h1>
        {examplesList}
      </div>
    );
  }
}

export default Home;
