import { Component } from '@angular/core';
import { Car } from 'src/app/models/car.interface';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrls: ['./fiat.component.scss']
})
export class FiatComponent {
  cars!: Car[];

  constructor() {
    this.getCars().then((data) => {
      this.cars = data;
      for (let i = 0; i < data.length; i++) {
        let brand = this.cars[i].brand;
        let brandLogo = this.cars[i].brandLogo;
        let model = this.cars[i].model;
        let modelImage = this.cars[i].modelImage;
        let year = this.cars[i].year;
        let price = this.cars[i].price;
        let available = this.cars[i].available;
      }

    });
  }

  async getCars() {
    const response = await fetch('../../../assets/db.json');
    const data = await response.json();
    return data;
  }
}
