import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AddeventService {

  constructor(public http:HttpClient) { }
  addEvent(event){
    return this.http.post(environment.url+'/addevent',event)
  }
}
