import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  foods: Foods[] = [];
  // searchText = '';
  constructor(private foodSrvc: FoodService, private router: ActivatedRoute) {}

  ngOnInit() {
    this.router.params.subscribe((params) => {
      if (params['searchItem']) {
        this.foods = this.foodSrvc
          .getAll()
          .filter((food) =>
            food.name
              .toLocaleLowerCase()
              .includes(params['searchItem'].toLowerCase())
          );
      } else if (params['tag']) {
        this.foods = this.foodSrvc.getAllFoodByTag(params['tag']);
      } else {
        this.foods = this.foodSrvc.getAll();
      }
    });
    // this.foods = this.foodSrvc.getAll();
    // console.log(this.foods)
  }
}
