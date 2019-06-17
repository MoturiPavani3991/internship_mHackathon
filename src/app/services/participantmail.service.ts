import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ParticipantmailService {

  constructor(public http:HttpClient) { }
  addparticipant(participant){
    return this.http.post(environment.url+'/addjudge',participant)
  }
}
