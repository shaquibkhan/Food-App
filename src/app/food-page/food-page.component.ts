import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  food! : Foods

  constructor(private route: ActivatedRoute, private foodSrvc: FoodService, private cartSrvc: CartService, private router: Router){
    route.params.subscribe((params)=>{
      if(params['id']){
        this.food = foodSrvc.getFoodById(params['id'])
      }
    })
  }

  addInCart(){
    this.cartSrvc.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }
}
