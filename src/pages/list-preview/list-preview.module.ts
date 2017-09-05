import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPreviewPage } from './list-preview';

@NgModule({
  declarations: [
    ListPreviewPage,
  ],
  imports: [
    IonicPageModule.forChild(ListPreviewPage),
  ],
})
export class ListPreviewPageModule {}
