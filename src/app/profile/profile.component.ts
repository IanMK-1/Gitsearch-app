import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../app/user-profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public userProfileService: UserProfileService) { 
    this.userProfileService.getProfileInfo().subscribe(profile =>{
      console.log(profile);
    })
  }

  ngOnInit() {
  }

}
