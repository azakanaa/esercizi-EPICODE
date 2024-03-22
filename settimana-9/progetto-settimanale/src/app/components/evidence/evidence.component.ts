import { Component } from '@angular/core';
import { Car } from 'src/app/models/car.interface';

@Component({
  selector: 'app-evidence',
  templateUrl: './evidence.component.html',
  styleUrls: ['./evidence.component.scss']
})
export class EvidenceComponent {
  cars: Car[] = [];
  related: Car[] = [];
  included: number[] = [];

  constructor() {
    this.getCars().then((data) => {
      this.cars = data;
      this.printCards();
    })
  }

  async getCars() {
    const response = await fetch('../../../assets/db.json');
    const data = await response.json();
    return data;
  }

  printCards() {
    for (let i = 0; i < 2; i++) {
      let index = Math.floor(Math.random() * this.cars.length);
      if (this.included.includes(index)) {
        index = Math.floor(Math.random() * this.cars.length);
      }
      this.included.push(index);
    }
    for (let i = 0; i < this.included.length; i++) {
      let postIndex = this.included[i] - 1;
      this.related.push(this.cars[postIndex]);
    }
  }
}
