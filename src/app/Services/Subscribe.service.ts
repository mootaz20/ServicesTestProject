import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";

export class subscribeService{
    http : HttpClient = inject(HttpClient);
    onSubscribeServices(type: string){
        alert(`hello brother for this  ${type} subscribe , you are subscribe in this website `);
          this.http.get('https://fakestoreapi.com/products/1').subscribe((data)=>{
            console.log(data);
          })
    }
}