import React from 'react';
import PropTypes from 'prop-types';
import API from '../utils/API';

class QuestionsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: '',
      category: '',
      options: [
        { text: '', value: 8 }
      ]
    };
  }

  static propTypes = {
    id: PropTypes.any,
    question: PropTypes.string,
    category: PropTypes.string,
    options: PropTypes.array
  }
  static defaultProps = {
    id: '',
    question: '',
    category: '',
    options: []
  }

  addOption = (event) => {
    event.preventDefault();
    this.setState({
      options: [
        ...this.state.options,
        { text: "", value: 8 }
      ]
    });
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  handleOptionSelect = (event, index) => {
    const value = event.target.value;

    this.setState({
      options: this.state.options.map((opt, i) => {
        if (index === i) {
          return { ...opt, value: value };
        }
        return opt;
      })
    }
    );
  }

  handleOptionInput = (event, index) => {
    const value = event.target.value;

    this.setState({
      options: this.state.options.map((opt, i) => {
        if (index === i) {
          return { ...opt, text: value };
        }
        return opt;
      })
    }
    );
  }

  submitQuestion = (event) => {
    event.preventDefault();

    const question = this.state.question.trim();
    const category = this.state.category.trim();
    const options = this.state.options;

    if (this.areInputsValid(question, category)) {
      API.createQuestion({
        question, category, options
      }).then(() => {
        this.props.history.push('/');
      });
    }
  }

  areInputsValid = (question, category) => {
    if (!question) {
      alert("Please fill out the question");
      return false;
    }
    if (!category) {
      alert("Please fill out the category");
      return false;
    }

    return true;
  }

  render() {
    const { id, question, category, options } = this.state;

    return (
      <form className="container" onSubmit={this.submitQuestion}>

        <h1>Create new question</h1>

        <div className="form-group">
          <label
            htmlFor="question">
            New Question:
          </label>
          <input
            className="form-control"
            name="question"
            type="text"
            placeholder="New question"
            onChange={this.handleInputChange}
            value={question} />
        </div>

        <div className="form-group">
          <label
            htmlFor="category">
            Category:
          </label>
          <input
            className="form-control"
            name="category"
            type="text"
            placeholder="Category"
            onChange={this.handleInputChange}
            value={category} />
        </div>

        <br />

        <div className='row'>
          <div className='col-sm-11'>
            <h5>Please add the posible answers</h5>
          </div>
          <div className='col-sm-1'>
            <button className="btn btn-primary" onClick={this.addOption}>+</button>
          </div>
        </div>
        <div id='dynamicOptions'>
          {
            options.map((opt, i) => {
              return (
                <div className='form-group' key={i}>
                  <label htmlFor={opt.text}>Possible answer:</label>
                  <input
                    className='form-control'
                    name={opt.text}
                    type='text'
                    placeholder='Possible answer'
                    value={opt.text}
                    onChange={(event) => { this.handleOptionInput(event, i); }} />
                  <select className="form-control form-control-sm" onChange={(event) => { this.handleOptionSelect(event, i); }} value={opt.value}>
                    <option value={8} data-index="8">8</option>
                    <option value={6} data-index="6">6</option>
                    <option value={4} data-index="4">4</option>
                    <option value={2} data-index="2">2</option>
                  </select>
                </div>
              )
            })
          }
        </div>

        <button
          className="btn btn-primary"
          type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default QuestionsForm;