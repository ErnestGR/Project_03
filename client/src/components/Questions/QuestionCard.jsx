import React from 'react';
import PropTypes from 'prop-types';

class QuestionCard extends React.Component {
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
    id: "",
    question: "No question defined",
    category: "",
    options: []
  }

  render() {
    const categoryClass = {
      "Authority": "bg-info",
      "Budget": "bg-success",
      "Need": "bg-warning",
      "Timing": "bg-danger"
    }

    const { id, question, category, options } = this.props;
    let bg = "bg-success";
    Object.keys(categoryClass).forEach(function (key) {
      if (category === key) {
        bg = categoryClass[key];
      }
    });
    const classes = `card text-white ${bg} mb-3`;
    return (
      <>
        <div className="col-sm-4">
          <div className={classes} >
            <div className="card-header">{category}</div>
            <div className="card-body">
              <h5 className="card-title">{question}</h5>
              {
                options.map((option, index) => {
                  return (
                    <div className="custom-control custom-radio" key={index}>
                      <input
                        type="radio"
                        id={`${id}-${index}`}
                        name={`radio-${id}`}
                        className="custom-control-input"
                        value={option.value}
                        onChange={() => {
                          const value = option.value;
                          this.props.onAnswerSelect({ id, value });
                        }
                        } />
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