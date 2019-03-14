import React from 'react';
import PropTypes from 'prop-types';
import API from '../utils/API';

class QuestionsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
    question: 'No question defined',
    category: 'No category defined',
    options: []
  }

  addOption = () => {

  }

  render() {
    const { id, question, category, options } = this.props;

    return (
      <form className="container" onSubmit={this.submitExample}>

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
            placeholder="category"
            onChange={this.handleInputChange}
            value={category} />
        </div>

        <div id='optionsDiv'>
          <div className='row'>
            <div className='col-sm-11'>
              <h5>Please add the posible answers</h5>
            </div>
            <div className='col-sm-1'>
              <button className="btn btn-success">+</button>
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='options'>Possible answer: </label>
            <input
              className='form-control'
              name='options'
              type='text'
              placeholder='Possible answer'
              value={options} />
          </div>
          
          <div className='form-group'>
            <label htmlFor='options'>Possible answer: </label>
            <input
              className='form-control'
              name='options'
              type='text'
              placeholder='Possible answer'
              value={options} />
          </div>
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