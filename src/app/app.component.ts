import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ServicesTestProject';
  // http : HttpClient = inject(HttpClient);

  // ngOnInit(): void {
  //   this.http.get('https://fakestoreapi.com/products').subscribe((data)=>{
  //     console.log(data);
  //   })
  // }
}
