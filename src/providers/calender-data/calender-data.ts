import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';



/*
  Generated class for the CalenderDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CalenderDataProvider {

  public items:any=[];

  constructor(public http: HttpClient) {
   // console.log('Hello CalenderDataProvider Provider');
  this.getCalenderData();
  }

  getCalenderData(){
    
    let data: Observable<any> =this.http.get('https://jsonplaceholder.typicode.com/photos');


    data.subscribe(result =>{
      //this.items= result;
console.log(result['title']);
     console.log(result)
    
    
    });
    // this.items = this.getCalenderData();
     //return
  }

}
