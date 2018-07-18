import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JanuaryPage } from '../january/january';
import { FebruaryPage } from '../february/february';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openJanuary(){
    this.navCtrl.push(JanuaryPage);
  }
  openFebruary(){
    this.navCtrl.push(FebruaryPage);
  }
}
