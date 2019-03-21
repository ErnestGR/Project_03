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
        { opTxt: '', opVal: null }
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
    let newOpt = this.state.options.length += 1;
    this.setState(prevState => ({
      options: prevState.options.concat([newOpt])
    }));
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  handleOptionSelect = (event) => {
    const index = event.target.dataset.index;
    const value = event.target.value;

    /* this.setState(
      {
        options: options.map((opt, i) => {
          if(index === i) {
            return {...opt, opVal: value};
          }
          return opt;
        })
      }
    ) */

    this.setState(state => ({
      options: state.options.map((opt, i) => {
        if (index === i) {
          return { ...opt, opVal: value };
        }
        return opt;
      })
    })
    );
  }

  handleOptionInput = (event) => {
    const index = event.target.dataset.index;
    const value = event.target.value;

    this.setState(state => ({
      options: state.options.map((opt, i) => {
        if (index === i) {
          return {...opt, opVal: value};
        }
        return opt;
      })
    })
    );
  }

  submitQuestion = (event) => {
    event.preventDefault();

    const question = this.state.question.trim();
    const category = this.state.category.trim();
    const options = this.state.options;

    if (this.areInputsValid(question, category)) {
      API.saveExample({
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
                  <label htmlFor={opt.opTxt}>Possible answer:</label>
                  <input
                    className='form-control'
                    name={opt.opTxt}
                    type='text'
                    placeholder='Possible answer'
                    value={opt.opTxt}
                    onChange={this.handleOptionInput} />
                  <select className="form-control form-control-sm">
                    <option value={8} data-index="8" onChange={this.handleOptionSelect}>8</option>
                    <option value={6} data-index="6" onChange={this.handleOptionSelect}>6</option>
                    <option value={4} data-index="4" onChange={this.handleOptionSelect}>4</option>
                    <option value={2} data-index="2" onChange={this.handleOptionSelect}>2</option>
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