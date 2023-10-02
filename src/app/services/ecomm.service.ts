import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EcommService {
  products=[]
  constructor(http:HttpClient) {
     http.get('https://fakestoreapi.com/products').subscribe(
      (res:[])=>{this.products=res},
      (err)=>console.log('err',err),
      ()=>console.log('c'),      
     )
   }
   getOne(id:string){
    return this.products.filter(i=>i.id===id)[0]
   }
}
