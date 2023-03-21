import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  geAll():String[]{
    return [
      'assets/images/aguadito.jpg',
      'assets/images/aji_de_gallina.jpeg',
      'assets/images/arroz_verde.jpg',
      'assets/images/brocoli_saltado.jpg',
      'assets/images/caldo_de_gallina.jpg',
    ]
  }
}
