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
      'assets/images/carapulcra.jpg',
      'assets/images/causa_rellena.jpg',
      'assets/images/champu.jpg',
      'assets/images/chiuche.png',
      'assets/images/colifor_saltado.jpg',
      'assets/images/dulce_de_trigo.jpg',
      'assets/images/gelatina.jpg',
      'assets/images/humitas.jpg',
      'assets/images/jugo_fresa.jpeg',
      'assets/images/jugo_guanabana.png',
      'assets/images/jugo_mango.jpg',
      'assets/images/jugo_mora.jpg',
      'assets/images/jugo_papaya.jpeg',
      'assets/images/panqueques_de_avena.JPG',
      'assets/images/papa_rellena.jpeg',
      'assets/images/picarones.jpg',
      'assets/images/pollo_a_la_plancha.jpg',
      'assets/images/pure_de_espinaca.jpg',
      'assets/images/sopa_de_paico.jpg',
      'assets/images/sudado_pescado.jpg',
      'assets/images/tallarin_rojo.jpg',
      'assets/images/tallarin_verde.jpg',


    ]
  }
}
