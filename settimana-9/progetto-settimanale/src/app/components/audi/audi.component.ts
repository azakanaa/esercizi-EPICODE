import { Component } from '@angular/core';
import { Car } from 'src/app/models/car.interface';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrls: ['./audi.component.scss']
})
export class AudiComponent {
  cars!: Car[];
  car!: Car;

  constructor() {
    this.getCars();
  }

  async getCars() {
    const response = await fetch('../../../assets/db.json');
    const data = await response.json();
    this.cars = data;
    let index = this.cars.length;
    this.car = this.cars[index];
  }
}