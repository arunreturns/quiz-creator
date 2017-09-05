import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Question } from '../../models/Question'

@IonicPage()
@Component({
  selector: 'page-list-preview',
  templateUrl: 'list-preview.html',
})
export class ListPreviewPage {

  questions: Question[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams);
    console.log(JSON.stringify(navParams.data.questions))
    this.questions = navParams.data.questions;
  }
  submitQuiz(){
    console.log(this.questions)
    let answerAry = this.questions.map(question=>{
      return question.selectedAnswer === question.correctAnswer
    })
    console.log(answerAry)
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
  }

}
