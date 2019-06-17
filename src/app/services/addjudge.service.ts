import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddjudgeService {

  constructor(public http:HttpClient) { }
  addJudge(judge){
    return this.http.post(environment.url+'/addjudge',judge)
  }
  getevent(){
    return this.http.get(environment.url+'/eventsList')
  }
}
