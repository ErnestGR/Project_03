import React, { Component } from 'react';
import API from "../utils/API";
import PropTypes from 'prop-types';
import ExampleForm from './ExampleForm';
import QuestionList from '../components/Questions/QuestionList';

class CompleteForm extends Component {
  state = {  }
  render() { 
    return (
      <>
      <ExampleForm/>
      <QuestionList/>
      </>
    );
  }
}
 
export default CompleteForm;