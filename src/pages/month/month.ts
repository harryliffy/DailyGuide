import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JanuaryPage } from '../january/january';
import { FebruaryPage } from '../february/february';
import { MarchPage } from '../march/march';

/**
 * Generated class for the MonthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-month',
  templateUrl: 'month.html',
})
export class MonthPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MonthPage');
  }

  openJanuary(){
    this.navCtrl.push(JanuaryPage);
  }

  openSecond(){
    this.navCtrl.push(FebruaryPage);
  }
  openMarch(){
    this.navCtrl.push(MarchPage);
  }
}
