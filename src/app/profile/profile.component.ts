import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../app/user-profile.service';
import { Repo } from '../../app/repo';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  repos:any;
  profile:any;
  username:string;

  constructor(private userProfileService: UserProfileService) { 
    
  }

  findProfile(){
    this.userProfileService.updateProfile(this.username);
    this.userProfileService.getProfileInfo().subscribe(profile =>{
      console.log(profile);
      this.profile = profile;
    });

    this.userProfileService.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })
  }

  ngOnInit() {
  }

}
