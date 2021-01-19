import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iusers } from 'src/app/Interface/iuser';
import { UserService } from 'src/app/Service/user.service';
import { MustMatch } from 'src/app/shared/mustmatch';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerform:FormGroup;
  registerobj:Iusers;
  submitted=false;
  formData: FormData;

  validationMessages={
    'name':{
      'required':'First name is required',
      'minlength':'first name should be greater than 3 character',
      'maxlength':'first name should be less than 15 character',
    },
    'email':{
      'required':'email required',
      'email':'enter valid email',
    },
    'password':{
      'required':'password required',
      'minlength':'minimum 4 character',
    'maxlength':'maximum 12 character'
  },
  'confirm_password':{
    'required':'password required',
  },
  'Address':{
    'required':'address is required',
  },
  'mobileno':{
    'required':'mobile number is required',
    'minlength':'mobile number must be greater than 10 characters.',
    'maxlength':'mobile number must be less than 10 characters.',
    'pattern':'only numbers allowed',
  },
  }
  formErrors={
  
    'name':'',
    'email':'',
    'password':'',
    'confirm_password':'',
    'Address':'',
    'mobileno':'',
  }

  logValidationErrors(group:FormGroup=this.registerform):void{
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
  constructor(public fb:FormBuilder,private usrService : UserService,private router: Router) { }

  ngOnInit() {
    this.registerform=this.fb.group({
      name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(4)]],
      confirm_password:['',Validators.required],
      Address:['',[Validators.required]],
      mobileno:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^[0-9]*$")]],
    },
    {
      validator: MustMatch('password', 'confirm_password',)
  })
    this.registerform.valueChanges.subscribe((data)=>{
      this.logValidationErrors(this.registerform)
    });
  }

  get f() {
    return this.registerform.controls;
  }

  onSubmit(registerform:FormGroup){
    this.submitted = true;
    if(!registerform.valid){
      console.log(registerform.value)
      return;
    }
    this.formData = new FormData();
    this.formData.append('name',this.f.name.value)
    this.formData.append('email',this.f.email.value)
    this.formData.append('password',this.f.password.value)
    this.formData.append('address',this.f.Address.value)
    this.formData.append('mobileno',this.f.mobileno.value)
    this.postdata(this.formData)
  }


  postdata(regobj){
    this.usrService.postuser(regobj).subscribe();
    this.router.navigate(['/login']);
  }

}
