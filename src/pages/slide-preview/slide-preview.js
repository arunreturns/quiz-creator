"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var ionic_angular_2 = require('ionic-angular');
var SlidePreviewPage = (function () {
    function SlidePreviewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.questions = navParams.data.questions;
    }
    SlidePreviewPage.prototype.ngAfterViewInit = function () {
        console.log(this.slides.getActiveIndex());
    };
    SlidePreviewPage.prototype.submitQuiz = function () {
        console.log(this.questions);
        var answerAry = this.questions.map(function (question) {
            return question.selectedAnswer === question.correctAnswer;
        });
        console.log(answerAry);
    };
    SlidePreviewPage.prototype.moveToQuestion = function (index) {
        index > 0 ? this.slides.slideNext() : this.slides.slidePrev();
    };
    SlidePreviewPage.prototype.selectOption = function (question, optionValue) {
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
    SlidePreviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SlidePreviewPage');
    };
    __decorate([
        core_1.ViewChild(ionic_angular_2.Slides)
    ], SlidePreviewPage.prototype, "slides");
    SlidePreviewPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-slide-preview',
            templateUrl: 'slide-preview.html'
        })
    ], SlidePreviewPage);
    return SlidePreviewPage;
}());
exports.SlidePreviewPage = SlidePreviewPage;
