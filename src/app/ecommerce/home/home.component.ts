import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, defer } from 'rxjs';
import { EcommService } from 'src/app/services/ecomm.service';
import { addAction, decrementAction, incrementAction, product, removeAction } from 'src/app/services/redux/slice/cart/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponentEComm implements OnInit {
  localStore:EcommService
  cart$:Observable<{cart:[product]}>
  localCart:Array<product> = []
  constructor(store:EcommService,private cart:Store<{cart:[product]}>){
    this.localStore = store
    this.cart$= cart
  }
  ngOnInit(): void {
    this.cart$.subscribe(r=>{
      this.localCart= r.cart
      
    })
  }
  addToCart(p){
    this.cart.dispatch(addAction(p))
  }
  removeCart(p:product){
    this.cart.dispatch(removeAction(p))
  }
  checkExist(p){
    if(this.localCart.filter(i=>i.id===p.id).length>0){
      return false
    }else{
      return true
    }
  }
  getCount(p){
    let a = this.localCart.filter(i=>i.id===p.id) 
    if(a.length>0){
      return a[0].quantity
    }else{
      return 0
    }
  }
  increment(p){
    this.cart.dispatch(incrementAction(p))
  }
  decrement(p){
    this.cart.dispatch(decrementAction(p))
  }
  
}
