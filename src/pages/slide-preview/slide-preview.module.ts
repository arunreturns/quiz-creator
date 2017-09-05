import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlidePreviewPage } from './slide-preview';

@NgModule({
  declarations: [
    SlidePreviewPage,
  ],
  imports: [
    IonicPageModule.forChild(SlidePreviewPage),
  ],
})
export class SlidePreviewPageModule {}
