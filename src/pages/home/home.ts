import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  vessels=[];
  vesselName;

  constructor(public navCtrl: NavController public http: HttpClient) {

  }

    public loadData(vesselName){
    // this.vessels.push(vesselName);
    // this.vesselName="";
    
    let url = "http://localhost/app/index.php/api/FishingVessel.php/allship"
    
    this.http.get(url)
             .subscribe(
               (result:any)=>{
                 console.log(result);
                 this.vessels=result;
               }
             );
  }

}
