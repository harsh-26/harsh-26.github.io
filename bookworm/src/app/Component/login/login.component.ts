import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iusers } from 'src/app/Interface/iuser';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform:FormGroup;
  registerobj:Iusers;
  formData : FormData;
  submitted=false;
  loginDetails : Iusers;
  validationMessages={
    'email':{
      'required':'email required',
      'email':'enter valid email',
    },
    'password':{
      'required':'password required',
      'minlength':'minimum 6 character',
    'maxlength':'maximum 12 character'
  },
}
  formErrors={
    'email':'',
    'password':'',
  }

  logValidationErrors(group:FormGroup=this.loginform):void{
    Object.keys(group.controls).forEach((key:string)=>{
      const abstractControl=group.get(key);
      if(abstractControl instanceof FormGroup){
        this.logValidationErrors(abstractControl);
      }
      else{
        this.formErrors[key]='';
        if(abstractControl && !abstractControl.valid &&
          (abstractControl.touched || abstractControl.dirty)){
          const messages=this.validationMessages[key];
          for(const errorkey in abstractControl.errors){
            if(errorkey){
              this.formErrors[key]+=messages[errorkey]+' ';
            }
          }
        }
      }
    });
  }
  constructor(public fb:FormBuilder,private _login : UserService,private router: Router) { }

  ngOnInit() {
    this.loginform=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
     });
    this.loginform.valueChanges.subscribe((data)=>{
      this.logValidationErrors(this.loginform)
    });
  }

  get f(){
    return this.loginform.controls;
  }
  onSubmit(logform:FormGroup){
    this.formData = new FormData();
    this.formData.append('email',this.f.email.value)
    this.formData.append('password',this.f.password.value)
    this._login.login(this.formData).subscribe((data) =>
    {
      this.loginDetails = data;
      console.log(this.loginDetails);
      localStorage.setItem('usr',JSON.stringify(this.loginDetails))
      this.router.navigate(['/home'])
    },error=>{
      console.log(error);
    })
  }
  

}
