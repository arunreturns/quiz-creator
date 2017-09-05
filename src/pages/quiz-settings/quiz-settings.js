"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var QuizSettingsPage = (function () {
    function QuizSettingsPage(navCtrl, navParams, viewCtrl, quizProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.quizProvider = quizProvider;
        this.settings = quizProvider.quizSettings;
    }
    QuizSettingsPage.prototype.closeSettings = function () {
        this.viewCtrl.dismiss();
    };
    QuizSettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuizSettingsPage');
    };
    QuizSettingsPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-quiz-settings',
            templateUrl: 'quiz-settings.html'
        })
    ], QuizSettingsPage);
    return QuizSettingsPage;
}());
exports.QuizSettingsPage = QuizSettingsPage;
