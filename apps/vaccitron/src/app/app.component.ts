import { Component } from '@angular/core';
import { UserDetails } from './user-details/form/form.component';

@Component({
  selector: 'vacgaps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = "Friends to Vaccines";

  handleUserDetails(data: UserDetails) {
  }
}
