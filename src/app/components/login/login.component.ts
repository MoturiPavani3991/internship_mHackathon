import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
//import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
//import { userInfo } from 'os';
//import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 role:any
  username:any;
  password:any;
  model: any = {};
  registerForm: FormGroup;
  constructor(private _router:Router,private fb: FormBuilder,public loginservice:LoginService) {

    }
  submitForm(){
    console.log("calling");
    console.log(this.model.username,this.model.password);
    this.loginservice.Login(this.model.username).subscribe((response)=>{
      console.log(response['role'])
      this.role=response['role'];
      console.log("this.role",this.role);
      localStorage.setItem('isLoggedIn',this.role);
      if(this.role==='admin')
       {
        this._router.navigateByUrl('/admin/dashboard');
       }
       else if(this.role==='judge')
       {
        this._router.navigateByUrl('/judge/dashboard');
       }
    });
      
        //this._router.navigateByUrl('/dashboard');
      //   if(this.model.username==='admin' && this.model.password==='admin')
      //   {
      //     console.log(this.username+''+this.password);
      //     localStorage.setItem('isLoggedIn',this.model.username);
      //     this._router.navigateByUrl('/admin/dashboard');
      //   }
      //  else if(this.model.username==='judge' && this.model.password==='judge')
      //    {
      //      console.log(this.model.username+''+this.model.password);
      //      localStorage.setItem('isLoggedIn',this.model.username);
      //     this._router.navigateByUrl('/judge/dashboard');
      //  }
      
    }
    submit()
    {
      
      console.log("calling");
     this._router.navigate(['/register']);
      
    }
    // onSubmit() {
    //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    // }
   

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

}
