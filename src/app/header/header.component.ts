import { Component } from '@angular/core';
import { subscribeService } from '../Services/Subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  selected: string = '';
  onHome(){
    this.selected = 'home';
  }
  onAdmin(){
    this.selected = 'admin';
  }
  constructor(private service: subscribeService){

  }
  OnClick(){
    this.service.onSubscribeServices('Yearly');
  }
}
