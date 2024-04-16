import { Component } from '@angular/core';
import { subscribeService } from 'src/app/Services/Subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  constructor(private service: subscribeService){

  }
  OnClick(){
    this.service.onSubscribeServices('daily');
  }
}
