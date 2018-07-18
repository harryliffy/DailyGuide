import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JanuaryPage } from './january';

@NgModule({
  declarations: [
    JanuaryPage,
  ],
  imports: [
    IonicPageModule.forChild(JanuaryPage),
  ],
})
export class JanuaryPageModule {}
