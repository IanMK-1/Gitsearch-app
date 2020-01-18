import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Headers } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../app/user';


@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  username: User;
  private tokenKey = '9a4ca983e06d2d9dfe3b692fcb58930b87f90643';

  constructor(private httpClient: HttpClient ) {
    console.log("service is now ready");
    this.username = new User("");
    this.username.username = "ianMk-1";
   }

   getProfileInfo(){
     return this.httpClient.get("https://api.github.com/users/" + this.username.username + "?access_token=" + this.tokenKey);
   }

   getProfileRepos(){
    return this.httpClient.get("https://api.github.com/users/" + this.username.username + "/repos?access_token=" + this.tokenKey);
   }
   updateProfile(username:string){
     this.username.username = username;
   }
}
