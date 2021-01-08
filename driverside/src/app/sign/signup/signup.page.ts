import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  img:string;
  title:string='Dobuler';
  constructor() { }

  ngOnInit() {
    this.img = '../../../assets/img/logo.JPG';
  }

}
