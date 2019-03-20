import React from 'react';
import API from "../../utils/API";

import QuestionCard from "./QuestionCard";

class QuestionList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: []
    };
  }

  componentDidMount() {
    API.getQuestions()
      .then((response) => {
        this.setState({
          questions: response.data
        });
      });
  }

  getQuestionsAsCards = () => {
    const questions = this.state.questions;

    const questionCards = questions.map((question, index) => {
      return (
        <QuestionCard
          id={question._id}
          category={question.category}
          question={question.question}
          options={question.options}
          key={index}
        />
      );
    });

    return <>{questionCards}</>;
  }

  render() {
    const questionCards = this.getQuestionsAsCards();
    return (
      <div>
        {questionCards}
        {questionCards}
        {questionCards}
        {questionCards}
        {questionCards}
      </div>
    );
  }
}

export default QuestionList;