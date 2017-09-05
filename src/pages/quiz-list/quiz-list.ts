import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { SlidePreviewPage } from '../slide-preview/slide-preview';
import { ListPreviewPage } from '../list-preview/list-preview';

import { QuizProvider } from '../../providers/quiz/quiz'

@IonicPage()
@Component({
  selector: 'page-quiz-list',
  templateUrl: 'quiz-list.html',
})
export class QuizListPage {

  quizList: any[];
  constructor(public navCtrl: NavController, public quizProvider: QuizProvider) {
    this.quizList = quizProvider.quizList;
    // this.quizList = QuizList;
  }

  previewQuiz(quiz){
    console.log("Previewing Quiz", quiz)
    let isSlidingQuiz = quiz.quizSettings.useSlidingQuiz.value;
    let previewPage = isSlidingQuiz ? SlidePreviewPage : ListPreviewPage
    this.navCtrl.push(previewPage, {
      questions: quiz.questions
    })
  }
  
  deleteQuiz(quizIndex){
    
  }
  
  publishQuiz(quiz){
    
  }
  
  editQuiz(quiz){
    //Handle quiz update
  }

}
