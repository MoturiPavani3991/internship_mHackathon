import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _route:Router) { }
   isLoggedIn(){
     //console.log("logged in",localStorage.getItem('isLoggedIn'))
    if(localStorage.getItem('isLoggedIn')!=null){
      return true
    }
    else{
      return false
    }
  }
  isAdmin(){
    var user=localStorage.getItem('isLoggedIn');
    if(user==='admin')
    {
      return true;
    } else{
      return false
    }
  }
  isJudge(){
    var user=localStorage.getItem('isLoggedIn');
    if(user==='judge')
    {
      return true;
    } else {
      return false
    }
  }
    
}
