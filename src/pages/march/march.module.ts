import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarchPage } from './march';

@NgModule({
  declarations: [
    MarchPage,
  ],
  imports: [
    IonicPageModule.forChild(MarchPage),
  ],
})
export class MarchPageModule {}
