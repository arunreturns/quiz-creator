"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var forms_1 = require('@angular/forms');
var list_preview_1 = require('../list-preview/list-preview');
var slide_preview_1 = require('../slide-preview/slide-preview');
var quiz_settings_1 = require('../quiz-settings/quiz-settings');
var Question_1 = require('../../models/Question');
var Option_1 = require('../../models/Option');
var AddQuizPage = (function () {
    function AddQuizPage(navCtrl, formBuilder, modalCtrl, toastCtrl, quizProvider, validatorProvider) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.quizProvider = quizProvider;
        this.validatorProvider = validatorProvider;
        this.questions = [];
        this.quizForm = this.formBuilder.group({
            numQuestions: [null, forms_1.Validators.required],
            quizName: [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])]
        });
    }
    AddQuizPage.prototype.openQuizSettings = function () {
        var quizSettingsModal = this.modalCtrl.create(quiz_settings_1.QuizSettingsPage);
        quizSettingsModal.present();
    };
    AddQuizPage.prototype.populateAry = function () {
        this.questions = this.questions.map(function (q, i) {
            var qCopy = JSON.parse(JSON.stringify(q));
            qCopy.questionNo = "Question " + (i + 1);
            return qCopy;
        });
        console.log("populateAry", this.questions);
    };
    AddQuizPage.prototype.addQuestion = function () {
        this.questions.push(new Question_1.Question());
        this.populateAry();
    };
    AddQuizPage.prototype.deleteQuestion = function (index) {
        this.questions.splice(index, 1);
        this.populateAry();
    };
    AddQuizPage.prototype.deleteOption = function (options, optnIndex) {
        options.splice(optnIndex, 1);
    };
    AddQuizPage.prototype.addQuestions = function () {
        var numQuestions = this.quizForm.value.numQuestions;
        numQuestions = parseInt(numQuestions);
        this.questions = Array(numQuestions).fill(new Question_1.Question());
        this.populateAry();
    };
    AddQuizPage.prototype.addOption = function (question) {
        if (!question.options)
            question.options = [];
        question.options.push(new Option_1.Option());
    };
    AddQuizPage.prototype.showErrorToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    AddQuizPage.prototype.handleError = function (validationStatus) {
        console.log("Error:", validationStatus);
        if (this.questions && this.questions.length > 0)
            this.questions[validationStatus.questionIndex].errMsg = validationStatus.errMsg;
        if (validationStatus.questionIndex < 0)
            this.errMsg = validationStatus.errMsg;
        this.showErrorToast(validationStatus.errMsg);
    };
    AddQuizPage.prototype.previewQuiz = function () {
        var validationStatus = this.validatorProvider.validateQuestions(this.questions);
        var useSlidingQuiz = this.quizProvider.quizSettings.useSlidingQuiz;
        if (validationStatus === true) {
            var previewPage = useSlidingQuiz.value ? slide_preview_1.SlidePreviewPage : list_preview_1.ListPreviewPage;
            this.navCtrl.push(previewPage, {
                questions: this.questions
            });
        }
        else {
            this.handleError(validationStatus);
        }
    };
    AddQuizPage.prototype.saveQuiz = function () {
        var validationStatus = this.validatorProvider.validateQuestions(this.questions);
        if (validationStatus === true) {
            var quizData = {};
            this.quizForm.value,
                quizSettings;
            this.quizProvider.quizSettings,
                questions;
            this.questions;
        }
        console.log("Saving Quiz", quizData);
        this.quizProvider.quizList.push(quizData);
        this.questions = [];
    };
    AddQuizPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-add-quiz',
            templateUrl: 'add-quiz.html'
        })
    ], AddQuizPage);
    return AddQuizPage;
}());
exports.AddQuizPage = AddQuizPage;
{
    this.handleError(validationStatus);
}
