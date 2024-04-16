import { Component, inject } from '@angular/core';
import { subscribeService } from 'src/app/Services/Subscribe.service';
import { userService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
    name: string = '';
    gender: string = 'Male';  
    subType: string = 'Monthly';  
    status: string = 'Active'; 
    constructor(private service : userService){} 
    createNewUser(){
        this.service.CreateNewUser(this.name,this.gender,this.subType,this.status)
    }

}
