import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { userService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User[] = [];
    constructor(private service : userService){}
    ngOnInit(): void {
       this.user = this.service.GetAllUser(); 
    }
}
