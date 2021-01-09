import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.page.html',
  styleUrls: ['./newaccount.page.scss'],
})
export class NewaccountPage implements OnInit {
  img:string;
  title:string='Dobuler';
  constructor() { }

  ngOnInit() {
    this.img = '../../../assets/img/logo.JPG';
  }

}
