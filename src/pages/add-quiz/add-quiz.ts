import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, ToastController  } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { ListPreviewPage } from '../list-preview/list-preview'
import { SlidePreviewPage } from '../slide-preview/slide-preview'
import { QuizSettingsPage } from '../quiz-settings/quiz-settings'
import { QuizProvider } from '../../providers/quiz/quiz'
import { ValidatorProvider } from '../../providers/validator/validator'

import { Question } from '../../models/Question'
import { Option } from '../../models/Option'

@IonicPage()
@Component({
  selector: 'page-add-quiz',
  templateUrl: 'add-quiz.html'
})

export class AddQuizPage {
  errMsg: string;
  numQuestions: any;
  questions: Question[] = [];
  quizForm: FormGroup;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, 
              public modalCtrl: ModalController, public toastCtrl: ToastController,
              public quizProvider: QuizProvider,public validatorProvider: ValidatorProvider) {
    this.quizForm = this.formBuilder.group({
      numQuestions: [null, Validators.required],
      quizName: [null, Validators.compose([Validators.required, Validators.minLength(4)])]
    })
  }

  openQuizSettings(){
    let quizSettingsModal = this.modalCtrl.create(QuizSettingsPage);
    quizSettingsModal.present();
  }

  populateAry(){
    this.questions = this.questions.map((q, i) => {
      let qCopy = JSON.parse(JSON.stringify(q))
      qCopy.questionNo = "Question " + (i + 1);
      return qCopy
    });
    console.log("populateAry", this.questions)
  }

  addQuestion(){
    this.questions.push(new Question())
    this.populateAry();
  }

  deleteQuestion(index){
    this.questions.splice(index, 1)
    this.populateAry();
  }
  
  deleteOption(options, optnIndex){
    options.splice(optnIndex, 1)
  }

  addQuestions() {
    let { numQuestions } = this.quizForm.value;
    numQuestions = parseInt(numQuestions)
    this.questions = Array(numQuestions).fill(new Question())
    this.populateAry();
  }

  addOption(question) {
    if (!question.options)
      question.options = [];
    question.options.push(new Option());
  }

  showErrorToast(message){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }

  handleError(validationStatus){
    console.log("Error:", validationStatus)
    if ( this.questions && this.questions.length > 0) 
      this.questions[validationStatus.questionIndex].errMsg = validationStatus.errMsg;
    if ( validationStatus.questionIndex < 0 )
      this.errMsg = validationStatus.errMsg;
    this.showErrorToast(validationStatus.errMsg)
  }

  previewQuiz() {
    let validationStatus = this.validatorProvider.validateQuestions(this.questions);
    let { useSlidingQuiz } = this.quizProvider.quizSettings;
    if (validationStatus === true) {
      this.validatorProvider.structureQuestions(this.questions);
      let previewPage = useSlidingQuiz.value ? SlidePreviewPage : ListPreviewPage
      this.navCtrl.push(previewPage, {
        questions: this.questions
      })
    } else {
      this.handleError(validationStatus);
    }
  }

  saveQuiz(){
    let validationStatus = this.validatorProvider.validateQuestions(this.questions);
    if (validationStatus === true) {
      this.validatorProvider.structureQuestions(this.questions);
      let quizData = {
        ...this.quizForm.value,
        quizSettings: this.quizProvider.quizSettings,
        questions: this.questions
      }
      console.log("Saving Quiz", quizData);
      this.quizProvider.quizList.push(quizData)
      this.questions = [];
      this.quizForm.reset();
    } else {
      this.handleError(validationStatus);
    }
  }
}