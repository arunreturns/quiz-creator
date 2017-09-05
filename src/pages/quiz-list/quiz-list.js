"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var slide_preview_1 = require('../slide-preview/slide-preview');
var list_preview_1 = require('../list-preview/list-preview');
var QuizListPage = (function () {
    function QuizListPage(navCtrl, quizProvider) {
        this.navCtrl = navCtrl;
        this.quizProvider = quizProvider;
        this.quizList = quizProvider.quizList;
        // this.quizList = QuizList;
    }
    QuizListPage.prototype.previewQuiz = function (quiz) {
        console.log("Previewing Quiz", quiz);
        var isSlidingQuiz = quiz.quizSettings.useSlidingQuiz.value;
        var previewPage = isSlidingQuiz ? slide_preview_1.SlidePreviewPage : list_preview_1.ListPreviewPage;
        this.navCtrl.push(previewPage, {
            questions: quiz.questions
        });
    };
    QuizListPage.prototype.deleteQuiz = function (quizIndex) {
    };
    QuizListPage.prototype.publishQuiz = function (quiz) {
    };
    QuizListPage.prototype.editQuiz = function (quiz) {
        //Handle quiz update
    };
    QuizListPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-quiz-list',
            templateUrl: 'quiz-list.html'
        })
    ], QuizListPage);
    return QuizListPage;
}());
exports.QuizListPage = QuizListPage;
