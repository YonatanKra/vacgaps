import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vacgaps-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  @Input()
  title: string;

  constructor() {
    this.title = 'Test';
  }

  ngOnInit(): void {}
}
