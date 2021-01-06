import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutObservableComponent } from './about-observable.component';

describe('AboutObservableComponent', () => {
  let component: AboutObservableComponent;
  let fixture: ComponentFixture<AboutObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
