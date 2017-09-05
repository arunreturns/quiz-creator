import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';

import { Question } from '../../models/Question'

@IonicPage()
@Component({
  selector: 'page-slide-preview',
  templateUrl: 'slide-preview.html',
})
export class SlidePreviewPage {

  questions: Question[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.questions = navParams.data.questions;
  }

  ngAfterViewInit(){
    console.log(this.slides.getActiveIndex())
  }
  @ViewChild(Slides) slides: Slides;
  submitQuiz(){
    console.log(this.questions)
    let answerAry = this.questions.map(question=>{
      return question.selectedAnswer === question.correctAnswer
    })
    console.log(answerAry)
  }

  moveToQuestion(index){
    index > 0 ? this.slides.slideNext() : this.slides.slidePrev()
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidePreviewPage');
  }

}
