import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit {
  cars: any[] = [];
  constructor() {}

  ngOnInit(): void {
    fetch('http://localhost:3000/car')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        this.cars = data;
      })
      .catch((error) => {
        console.error('Erreur:', error);
      });
  }
}
