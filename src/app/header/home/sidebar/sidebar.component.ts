import { Component } from '@angular/core';
import { subscribeService } from 'src/app/Services/Subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private service: subscribeService){

  }
  OnClick(){
    this.service.onSubscribeServices('Monthly');  
  } 
}
