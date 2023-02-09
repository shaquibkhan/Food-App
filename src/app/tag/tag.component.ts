import { Component, Input } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent {
  @Input()
  foodPageTags?:string[];
  tags?: Tag[] = [];
 

  constructor(private foodSrvc: FoodService){}

  ngOnInit(){
    if(!this.foodPageTags)
    this.tags = this.foodSrvc.getAllTag();
  }
}
