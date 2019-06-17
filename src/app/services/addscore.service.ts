import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddscoreService {

  constructor(public http:HttpClient) { }
  addScore(judge){
    return this.http.post(environment.url+'/addScore',judge)
  }
}
