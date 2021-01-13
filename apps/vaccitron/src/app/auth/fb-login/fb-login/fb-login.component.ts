import { Component, OnInit } from '@angular/core';
import { FacebookLoginProvider, SocialAuthService, SocialUser } from "angularx-social-login";

@Component({
  selector: 'vacgaps-fb-login',
  templateUrl: './fb-login.component.html',
  styleUrls: ['./fb-login.component.scss']
})

export class FbLoginComponent implements OnInit {

  user: SocialUser;
  isLoggedIn: boolean;

  constructor(private authService: SocialAuthService) { }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.isLoggedIn = (user != null);
    });
  }

  refreshToken(): void {
    this.authService.refreshAuthToken(FacebookLoginProvider.PROVIDER_ID);
  }

}
