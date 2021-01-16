import { EventEmitter, Injectable } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FbAuthService {
  authEvent = new EventEmitter<SocialUser|null>();
  loggedIn = false;

  constructor(private socialAuthService: SocialAuthService) {
    socialAuthService.authState.subscribe(user => {
      this.loggedIn = !!user;
      this.authEvent.emit(user)
    });
  }

  async signIn() {
    return await this.socialAuthService.signIn(environment.fbLoginProviderId);
  }

  async signOut() {
    return await this.socialAuthService.signOut();
  }
}
