import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JunePage } from './june';

@NgModule({
  declarations: [
    JunePage,
  ],
  imports: [
    IonicPageModule.forChild(JunePage),
  ],
})
export class JunePageModule {}
