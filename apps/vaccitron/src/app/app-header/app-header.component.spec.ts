import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeaderComponent } from './app-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'vacgaps-test-component',
  template: `<vacgaps-app-header [title]="title"></vacgaps-app-header>`,
})
export class TestComponent {
  title = 'user-interface';
}
describe('AppHeaderComponent', () => {
  let component: AppHeaderComponent;
  let fixture: ComponentFixture<AppHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatToolbarModule, MatIconModule, MatButtonModule],
      declarations: [AppHeaderComponent, TestComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should display the site's title`, function () {
    const title = 'This is a title';
    component.title = title;
    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css('h1')).nativeElement.textContent
    ).toEqual(title);
  });

  it(`should get the title as an input`, function () {
    const appTitle = 'This is a title from parent';
    const parentFixture = TestBed.createComponent(TestComponent);
    parentFixture.componentInstance.title = appTitle;
    parentFixture.detectChanges();
    expect(
      parentFixture.debugElement.query(By.css('vacgaps-app-header h1'))
        .nativeElement.textContent
    ).toEqual(appTitle);
  });
});
