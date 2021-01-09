import { Component } from '@angular/core';
import { UserDetails } from './user-details/form/form.component';
import { CITIES } from '@vacgaps/constants';

@Component({
  selector: 'vacgaps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = "Friends to Vaccines";
  cities = new Map(Object.entries(CITIES));

  handleUserDetails(data: UserDetails) {
  }
}
