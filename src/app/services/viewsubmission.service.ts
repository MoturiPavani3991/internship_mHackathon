import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ViewsubmissionService {
  
  constructor(private http:HttpClient) { }
  viewsubmission(){
    return this.http.get(environment.url+'/retriveall')
  }
  enterteam(finalteam){
    return this.http.post(environment.url+'/finalteam',finalteam)
  }
  updateregistrations(teamLeadName){
    console.log(teamLeadName);
    return this.http.post(environment.url+'/acceptUpdate',teamLeadName)
  }
}
