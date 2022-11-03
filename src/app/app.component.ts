import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FreePlace-Application-Web';
  options = [
    { path: '/parking-lots', title: ''},
    { path: '/reservation-history', title: 'Reservation History'}
  ]
}
