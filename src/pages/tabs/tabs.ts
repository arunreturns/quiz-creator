import { ListPreviewPage } from './../list-preview/list-preview';
import { Component } from '@angular/core';

import { AddQuizPage } from '../add-quiz/add-quiz';
import { QuizListPage } from '../quiz-list/quiz-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListPreviewPage;
  tab2Root = QuizListPage;

  constructor() {

  }
}
