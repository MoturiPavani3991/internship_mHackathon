import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViewteaminfoService {

  constructor(public http:HttpClient) { }
  Teamdata(teamleadname){
    return this.http.get(environment.url+'/retriveteamMembers?teamleadname='+ teamleadname)
  }
}
