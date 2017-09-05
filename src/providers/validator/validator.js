"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
var ValidatorProvider = (function () {
    function ValidatorProvider() {
        console.log('Hello ValidatorProvider Provider');
    }
    ValidatorProvider.prototype.validateOptions = function (options, i, questionNo) {
        if (options.length === 0) {
            return {
                questionIndex: i,
                errMsg: "No Options for " + questionNo
            };
        }
        if (options.length < 2) {
            return {
                questionIndex: i,
                errMsg: "Add at-least two options for " + questionNo
            };
        }
        return true;
    };
    ValidatorProvider.prototype.validateQuestion = function (question, i) {
        if (typeof question.questionTitle === 'undefined' || question.questionTitle.length === 0) {
            return {
                questionIndex: i,
                errMsg: "No Question Title for " + question.questionNo
            };
        }
        if (typeof question.correctAnswer === 'undefined' || question.correctAnswer.length === 0) {
            return {
                questionIndex: i,
                errMsg: "No Answer for " + question.questionNo
            };
        }
        return true;
    };
    ValidatorProvider.prototype.validateQuestions = function (questions) {
        if (questions.length === 0) {
            return {
                questionIndex: -1,
                errMsg: "No Questions"
            };
        }
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var questionValidationStatus = this.validateQuestion(question, i);
            if (questionValidationStatus !== true)
                return questionValidationStatus;
            var options = question.options || [];
            var optionValidationStatus = this.validateOptions(options, i, question.questionNo);
            if (optionValidationStatus !== true)
                return optionValidationStatus;
            for (var j = 0; j < options.length; j++) {
                var option = options[j];
                if (!option.optionValue && option.optionValue.length === 0) {
                    return {
                        questionIndex: i,
                        errMsg: "Option Value missing for " + option.optionNo
                    };
                }
            }
            delete question.errMsg;
        }
        return true;
    };
    ValidatorProvider = __decorate([
        core_1.Injectable()
    ], ValidatorProvider);
    return ValidatorProvider;
}());
exports.ValidatorProvider = ValidatorProvider;
