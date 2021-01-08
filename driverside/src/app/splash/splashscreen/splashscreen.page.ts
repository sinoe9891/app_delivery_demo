import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage implements OnInit {
   img:string;
   title:string='Dobuler';
   mensaje:boolean=true;
  constructor(public navCtrl:NavController) { }

  ngOnInit() {
    this.img = '../../../assets/img/logo.JPG';
  }
  

}
