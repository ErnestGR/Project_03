import React from 'react';
import PropTypes from 'prop-types';

class QuestionCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true
    };
  }

  static propTypes = {
    id: PropTypes.any,
    question: PropTypes.string,
    category: PropTypes.string,
    options: PropTypes.array
  }

  static defaultProps = {
    id: "",
    question: "No question defined",
    category: "",
    options: []
  }

  /* handleRadioChange = (e) => {
    this.setState({ checked: false})
  } */

  render() {
    const {id, question, category, options} = this.props;

    return (
      
      <>
        <div className="col-sm-4">
          <div className="card text-white bg-info mb-3">
            <div className="card-header">{category}</div>
            <div className="card-body">
              <h5 className="card-title">{question}</h5>
              {
                options.map((option, index) => {
                  return (
                    <div className="custom-control custom-radio" key={index}>
                      <input type="radio" id={`${id}-${index}`} name={`radio-${id}`} className="custom-control-input" value={option.value}/>
                      <label className="custom-control-label" htmlFor={`${id}-${index}`}>{option.text}</label>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default QuestionCard;