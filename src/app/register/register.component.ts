import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  person : FormGroup;
  username : FormControl;
  password :FormControl;

  constructor() {

    this.username=new FormControl('',Validators.required);
    this.password=new FormControl('',Validators.minLength(6));
   }

   saverec()
   {

   }

checkusername()
{
  console.log(this.username.value);
  let result=this.username.hasError('required') ? "name mandate" : "";
  return result;
}

checkpassword()
{
  let pass=this.password.hasError('minlength') ? "passowrd should be >6" : "";
  return pass;
}


  ngOnInit(): void {

  }
   
}
