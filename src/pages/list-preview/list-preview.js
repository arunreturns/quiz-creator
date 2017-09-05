"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var ListPreviewPage = (function () {
    function ListPreviewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        console.log(navParams);
        console.log(JSON.stringify(navParams.data.questions));
        this.questions = navParams.data.questions;
    }
    ListPreviewPage.prototype.submitQuiz = function () {
        console.log(this.questions);
        var answerAry = this.questions.map(function (question) {
            return question.selectedAnswer === question.correctAnswer;
        });
        console.log(answerAry);
    };
    ListPreviewPage.prototype.selectOption = function (question, optionValue) {
        console.log(question, "-", optionValue);
        if (!question.selectedAnswer)
            question.selectedAnswer = [];
        var optnIndex = question.selectedAnswer.indexOf(optionValue);
        if (optnIndex >= 0) {
            question.selectedAnswer.splice(optnIndex);
        }
        else {
            question.selectedAnswer.push(optionValue);
        }
    };
    ListPreviewPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-list-preview',
            templateUrl: 'list-preview.html'
        })
    ], ListPreviewPage);
    return ListPreviewPage;
}());
exports.ListPreviewPage = ListPreviewPage;
