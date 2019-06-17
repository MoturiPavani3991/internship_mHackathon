import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddteamService {

  constructor(private http:HttpClient) { }
  addTeam(teaminfo){
    return this.http.post(environment.url+'/teamInfo',teaminfo)
  }
}
