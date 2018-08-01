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
      let data:Observable<any> = this.http.get('https://jsonplaceholder.typicode.com/posts');
      data.subscribe(result => {
        this.data=result;
        
        console.log(result['0'].body);
      });
 }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad MarchPage');
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
