import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ValidatorProvider {

  constructor() {
    console.log('Hello ValidatorProvider Provider');
  }

  structureQuestions(questions){
    questions.map(question=>{
      let correctAnswer = [];
      question.options.map(option=>{
        if ( question.correctAnswer.indexOf(option.optionValue) >= 0 )
          correctAnswer.push(option.optionValue);
      })
      question.correctAnswer = correctAnswer.toString();
    })
  }

  validateOptions(options, i, questionNo){
    if (options.length === 0) {
      return {
        questionIndex: i,
        errMsg: "No Options for " + questionNo
      };
    }
    if (options.length < 2) {
      return {
        questionIndex: i,
        errMsg: "Add at-least two options for " + questionNo
      };
    }
    return true;
  }
  validateQuestion(question, i){
    if ( typeof question.questionTitle === 'undefined' || question.questionTitle.length === 0) {
      return {
        questionIndex: i,
        errMsg: "No Question Title for " + question.questionNo
      };
    }
    if ( typeof question.correctAnswer === 'undefined' || question.correctAnswer.length === 0) {
      return {
        questionIndex: i,
        errMsg: "No Answer for " + question.questionNo
      };
    }
    return true;
  }
  validateQuestions(questions) {
    if (questions.length === 0) {
      return {
        questionIndex: -1,
        errMsg: "No Questions"
      };
    }
    for (let i = 0; i < questions.length; i++) {
      let question = questions[i];

      let questionValidationStatus = this.validateQuestion(question, i)
      if ( questionValidationStatus !== true )
        return questionValidationStatus;
      
      let options = question.options || [];
      let optionValidationStatus = this.validateOptions(options, i, question.questionNo)
      if ( optionValidationStatus !== true )
        return optionValidationStatus;

      for (let j = 0; j < options.length; j++) {
        let option = options[j];
        if (!option.optionValue && option.optionValue.length === 0) {
          return {
            questionIndex: i,
            errMsg: "Option Value missing for " + option.optionNo
          };
        }
      }
      delete question.errMsg;
    }
    return true;
  }

}
