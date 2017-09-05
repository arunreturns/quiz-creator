import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class QuizProvider {

  quizList: any[] = [];
  quizSettings: any;
  constructor() {
    console.log('Hello QuizProvider Provider');
    this.quizSettings = this.initQuizSettings();
  }

  initQuizSettings(){
    return {
      useSlidingQuiz: {
        text: "Use Sliding Quiz",
        value: false,
        icon: 'albums'
      },
      requireLogin: {
        text: "Require Login",
        value: false,
        icon: 'person'
      }
    }
  }

}
