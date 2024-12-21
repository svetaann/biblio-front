import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

class User{
  constructor(
      public name: string,
      public email: string,
      public phone: string,
      public login: string,
      public password: string,

  ){}
}

@Component({
  selector: 'sign-in',
  standalone: false,
  
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  name: string = "";
  email: string = "";
  phone: string = "";
  login: string = "";
  password: string = "";
    
  onSubmit(form: NgForm){
      console.log(form);
  }
}
