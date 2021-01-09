import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage implements OnInit {
   img:string;
   title:string='Dobuler';
   mensaje:boolean=true;
  constructor(public router:Router) { }

  ngOnInit() {
    this.img = '../../../assets/img/logo.JPG';
  }

  GoToPage(page){
    this.router.navigate([page])
  }
  

}
