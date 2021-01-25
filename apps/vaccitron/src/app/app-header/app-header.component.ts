import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'vacgaps-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  @Input()
  title: string = '';

  get loggedIn(): boolean {
    return this.accountService.loggedIn;
  }

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {}

  async login() {
    await this.accountService.login();
  }
}
