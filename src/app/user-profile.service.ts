import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Headers } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../app/user';
import { environment } from '../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  username: User;

  constructor(private httpClient: HttpClient ) {
    console.log("service is now ready");
    this.username = new User("");
    this.username.username = "ianMK-1";
   }

   getProfileInfo(){
     return this.httpClient.get("https://api.github.com/users/" + this.username.username + "?access_token=" + environment.tokenKey);
   }
}
