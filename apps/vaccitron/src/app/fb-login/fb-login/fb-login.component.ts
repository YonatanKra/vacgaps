import { Component, OnDestroy, OnInit } from '@angular/core';
import { FacebookLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'vacgaps-fb-login',
  templateUrl: './fb-login.component.html',
  styleUrls: ['./fb-login.component.scss']
})

export class FbLoginComponent implements OnInit, OnDestroy {

  user: SocialUser;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  constructor(private authService: SocialAuthService, private router: Router) {
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  ngOnInit(): void {
    this.authService.authState.pipe(takeUntil(this.destroyed$)).subscribe((user: SocialUser) => {
      if (user) this.router.navigateByUrl('');
    });
  }

}
