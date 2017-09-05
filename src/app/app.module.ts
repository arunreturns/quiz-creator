import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { AddQuizPage } from '../pages/add-quiz/add-quiz';
import { QuizListPage } from '../pages/quiz-list/quiz-list';
import { ListPreviewPage } from '../pages/list-preview/list-preview';
import { SlidePreviewPage } from '../pages/slide-preview/slide-preview';
import { QuizSettingsPage } from '../pages/quiz-settings/quiz-settings'

import { KeysPipe } from '../pipes/keys/keys'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QuizProvider } from '../providers/quiz/quiz';
import { ValidatorProvider } from '../providers/validator/validator';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoginPage,
    AddQuizPage,
    QuizListPage,
    ListPreviewPage,
    SlidePreviewPage,
    QuizSettingsPage,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    AddQuizPage,
    QuizListPage,
    ListPreviewPage,
    SlidePreviewPage,
    QuizSettingsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuizProvider,
    ValidatorProvider
  ]
})
export class AppModule {}
