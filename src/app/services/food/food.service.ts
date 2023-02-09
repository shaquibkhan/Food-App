import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAll(): Foods[] {
    return [
      {
        id: 1,
        price: 500,
        name: 'Black Berry',
        favourite: false,
        star: 4,
        tags: ['Fruits', 'Salad', 'Lunch'],
        imageUrl: '../assets/img_1.jpg',
        cookTime: '20-30',
        origins: ['Turkey', 'UK', 'New Zealand'],
      },
      {
        id: 2,
        price: 500,
        name: 'Pizza',
        favourite: false,
        star: 4,
        tags: ['FastFood', 'Pizza', 'Lunch'],
        imageUrl: '../assets/img_2.jpg',
        cookTime: '20-30',
        origins: ['China', 'USA'],
      },
      {
        id: 3,
        price: 500,
        name: 'Cheesy Pizza',
        favourite: false,
        star: 4,
        tags: ['FastFood', 'Pizza', 'Lunch'],
        imageUrl: '../assets/img_3.jpg',
        cookTime: '20-30',
        origins: ['China', 'USA'],
      },
      {
        id: 4,
        price: 500,
        name: 'Chicken Curry',
        favourite: false,
        star: 4.3,
        tags: ['MainCourse', 'Lunch'],
        imageUrl: '../assets/img_4.jpg',
        cookTime: '20-30',
        origins: ['India', 'Pakistan', 'Bangladesh'],
      },
      {
        id: 5,
        price: 500,
        name: 'Biryani',
        favourite: false,
        star: 5,
        tags: ['MainCourse', 'Meal', 'Lunch'],
        imageUrl: '../assets/img_5.jpg',
        cookTime: '20-30',
        origins: ['India', 'Pakistan', 'Bangladesh'],
      },
      {
        id: 6,
        price: 200,
        name: 'Dal Makhni',
        favourite: false,
        star: 4,
        tags: ['FastFood', 'Soup'],
        imageUrl: '../assets/img_6.jpg',
        cookTime: '20-30',
        origins: ['India', 'Pakistan', 'Bangladesh'],
      },
      {
        id: 7,
        price: 200,
        name: 'Momoz',
        favourite: false,
        star: 4,
        tags: ['FastFood'],
        imageUrl: '../assets/img_7.jpg',
        cookTime: '20-30',
        origins: ['China', 'Middle East'],
      },
      {
        id: 8,
        price: 250,
        name: 'Roll',
        favourite: false,
        star: 4,
        tags: ['FastFood', 'JunkFood'],
        imageUrl: '../assets/img_8.jpg',
        cookTime: '20-30',
        origins: ['China', 'Asia'],
      },
      {
        id: 9,
        price: 400,
        name: 'Pizza',
        favourite: false,
        star: 4.5,
        tags: ['Bread', 'Lunch'],
        imageUrl: '../assets/img_9.jpg',
        cookTime: '20-30',
        origins: ['India', 'Pakistan', 'Turkey'],
      },
    ];
  }

  getAllFoodByTag(tag:string): Foods[]{
    return tag == 'All' ?  this.getAll()  :  this.getAll().filter(food=> food.tags?.includes(tag)) 
    
  }

  getAllTag(): Tag[]{
    return [
      {name: 'All', count: 9},
      {name: 'Lunch', count: 6},
      {name: 'Soup', count: 1},
      {name: 'FastFood', count: 5},
      {name: 'Bread', count: 1},
      {name: 'JunkFood', count: 1},
      {name: 'MainCourse', count: 2},
    ]
  }

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }
}
