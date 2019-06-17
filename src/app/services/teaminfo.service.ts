import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeaminfoService {

  // constructor(private http:HttpClient) { }
  // Register(user){
  //   return this.http.post(environment.url+'/teamregister',user)
  // }
}
