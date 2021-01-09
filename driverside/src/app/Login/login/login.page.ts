import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  title:string = 'Dobuler';
  imag:string;
  constructor(public router:Router) { }

  ngOnInit() {
    this.imag = '../../../assets/img/logo.JPG';
  }
  GoToPage(page){
    this.router.navigate([page])
  }

}
