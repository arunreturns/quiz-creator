import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizSettingsPage } from './quiz-settings';

@NgModule({
  declarations: [
    QuizSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizSettingsPage),
  ],
})
export class QuizSettingsPageModule {}
