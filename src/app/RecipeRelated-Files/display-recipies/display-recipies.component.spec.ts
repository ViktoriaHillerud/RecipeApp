import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRecipiesComponent } from './display-recipies.component';

describe('DisplayRecipiesComponent', () => {
  let component: DisplayRecipiesComponent;
  let fixture: ComponentFixture<DisplayRecipiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayRecipiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayRecipiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
