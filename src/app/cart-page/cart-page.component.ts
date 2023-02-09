import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
 cart!:Cart;

 constructor(private cartSrvc: CartService ){
  // private foodSrvc: FoodService
  // let foods = foodSrvc.getAll(); 
  this.setCart();
 }
ngOnInit(){
  
}
 setCart(){
  this.cart = this.cartSrvc.getCart();
 }

 removeItem(cartitem: CartItem){
  this.cartSrvc.removeFromCart(cartitem.food.id);
  this.setCart()
 }

 changeQuantity(cartitem: CartItem, quantityInString:string){
  const quantity = parseInt(quantityInString);
  this.cartSrvc.changeQuantity(cartitem.food.id, quantity);
  this.setCart();
  

 }
}
