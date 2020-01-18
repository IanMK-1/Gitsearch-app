import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Headers } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { User } from '../app/user';
import { environment } from '../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  username: User;

  constructor(private httpClient: HttpClient) {
    console.log("service is now ready");
    this.username.username = 'ianMK-1';
   }

   getProfileInfo(){
     return this.httpClient.get("https://api.github.com/users/" + this.username.username + "?access_token=" + environment.tokenKey);
   }
}
