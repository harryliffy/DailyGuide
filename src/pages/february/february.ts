import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalenderDataProvider } from '../../providers/calender-data/calender-data';



/**
 * Generated class for the FebruaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-february',
  templateUrl: 'february.html',
})
export class FebruaryPage {
  
  posts: any;
  public items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public calenderService:CalenderDataProvider) 
  {
    
    
    this.getData();
  }
// ionViewDidLoad() {
  getData() {
    //console.log('ionViewDidLoad FebruaryPage');
    
    this.items=this.calenderService.getCalenderData();
   

  }

}
