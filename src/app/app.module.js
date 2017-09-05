"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var ionic_angular_1 = require('ionic-angular');
var app_component_1 = require('./app.component');
var tabs_1 = require('../pages/tabs/tabs');
var login_1 = require('../pages/login/login');
var add_quiz_1 = require('../pages/add-quiz/add-quiz');
var quiz_list_1 = require('../pages/quiz-list/quiz-list');
var list_preview_1 = require('../pages/list-preview/list-preview');
var slide_preview_1 = require('../pages/slide-preview/slide-preview');
var quiz_settings_1 = require('../pages/quiz-settings/quiz-settings');
var keys_1 = require('../pipes/keys/keys');
var status_bar_1 = require('@ionic-native/status-bar');
var splash_screen_1 = require('@ionic-native/splash-screen');
var quiz_1 = require('../providers/quiz/quiz');
var validator_1 = require('../providers/validator/validator');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.MyApp,
                tabs_1.TabsPage,
                login_1.LoginPage,
                add_quiz_1.AddQuizPage,
                quiz_list_1.QuizListPage,
                list_preview_1.ListPreviewPage,
                slide_preview_1.SlidePreviewPage,
                quiz_settings_1.QuizSettingsPage,
                keys_1.KeysPipe
            ],
            imports: [
                platform_browser_1.BrowserModule,
                ionic_angular_1.IonicModule.forRoot(app_component_1.MyApp)
            ],
            bootstrap: [ionic_angular_1.IonicApp],
            entryComponents: [
                app_component_1.MyApp,
                tabs_1.TabsPage,
                login_1.LoginPage,
                add_quiz_1.AddQuizPage,
                quiz_list_1.QuizListPage,
                list_preview_1.ListPreviewPage,
                slide_preview_1.SlidePreviewPage,
                quiz_settings_1.QuizSettingsPage,
            ],
            providers: [
                status_bar_1.StatusBar,
                splash_screen_1.SplashScreen,
                { provide: core_1.ErrorHandler, useClass: ionic_angular_1.IonicErrorHandler },
                quiz_1.QuizProvider,
                validator_1.ValidatorProvider
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
