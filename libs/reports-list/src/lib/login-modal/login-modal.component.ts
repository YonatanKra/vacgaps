import {
  Component,
  EventEmitter,
  Injectable,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'vacgaps-report-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  loginButtonClicked(): void {
    loginButtonClickedEmitter.login();
  }
}

@Injectable()
class LoginButtonClickedEmitter {
  @Output()
  loginButtonClickedEvent = new EventEmitter<{}>();

  login(): void {
    this.loginButtonClickedEvent.emit({});
  }
}

export const loginButtonClickedEmitter = new LoginButtonClickedEmitter();
