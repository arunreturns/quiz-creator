import { Component } from '@angular/core';

import { AddQuizPage } from '../add-quiz/add-quiz';
import { QuizListPage } from '../quiz-list/quiz-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AddQuizPage;
  tab2Root = QuizListPage;

  constructor() {

  }
}
