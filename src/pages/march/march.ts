import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { DetailsPage} from '../details/details';

/**
 * Generated class for the MarchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-march',
  templateUrl: 'march.html',
})
export class MarchPage {
  data:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    
  }
 getData(){

  //'https://jsonplaceholder.typicode.com/posts
  /*this.http.get('assets/publication2018.json').map(res => res.json()).subscribe(result => {
    this.data = result;
    console.log(this.data);
}); */



    let data:Observable<any> = this.http.get('../../assets/data/publication2018.json');
      data.subscribe(result => {
        this.data=result;
        
        console.log(this.data);
      }); 
 }
  ionViewDidLoad() {
  console.log('ionViewDidLoad MarchPage');
  //
  this.getData();
  
    }
    showitem(item){
    
      
       this.navCtrl.push(DetailsPage, {
         data:item
       });
        // console.log(item);
    }

}
