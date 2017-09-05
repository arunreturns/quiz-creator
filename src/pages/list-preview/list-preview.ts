import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Question } from '../../models/Question'
import { Questions } from '../../mocks/questions'

import { ValidatorProvider } from './../../providers/validator/validator';

@IonicPage()
@Component({
  selector: 'page-list-preview',
  templateUrl: 'list-preview.html',
})
export class ListPreviewPage {
  quizResultAry: any[];
  questions: Question[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public validatorProvider: ValidatorProvider) {
    console.log(navParams);
    console.log(JSON.stringify(navParams.data.questions))
    this.questions = JSON.parse(JSON.stringify(Questions)) //navParams.data.questions;
    validatorProvider.structureQuestions(this.questions);
    this.quizResultAry = Array(this.questions.length).fill(null);
    console.log(this.quizResultAry)
  }
  submitQuiz(){
    console.log("submitQuiz", this.questions)
    let answerAry = this.questions.map(question=>{
      let isRightAnswer = question.selectedAnswer.toString() === question.correctAnswer.toString();
      return question.selectedAnswer.toString() === question.correctAnswer.toString()
    })
    this.quizResultAry = answerAry;
    console.log(this.quizResultAry)
  }
  selectOption(question, optionValue){
    console.log(question, "-", optionValue);
    if ( !question.selectedAnswer )
      question.selectedAnswer = [];
    let optnIndex = question.selectedAnswer.indexOf(optionValue);
    if ( optnIndex >= 0 ){
      question.selectedAnswer.splice(optnIndex)
    } else {
      question.selectedAnswer.push(optionValue)
    }
    let selectedAnswer = [];
    question.options.map(option=>{
      if ( question.selectedAnswer.indexOf(option.optionValue) >= 0 )
        selectedAnswer.push(option.optionValue);
    })
    question.selectedAnswer = selectedAnswer;
  }

}
