import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { QuizProvider } from '../../providers/quiz/quiz'

@IonicPage()
@Component({
  selector: 'page-quiz-settings',
  templateUrl: 'quiz-settings.html',
})
export class QuizSettingsPage {

  settings: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public quizProvider: QuizProvider) {
    this.settings = quizProvider.quizSettings;
  }
  
  closeSettings(){
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizSettingsPage');
  }

}
