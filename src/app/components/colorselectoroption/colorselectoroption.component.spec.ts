import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorselectoroptionComponent } from './colorselectoroption.component';

describe('ColorselectoroptionComponent', () => {
  let component: ColorselectoroptionComponent;
  let fixture: ComponentFixture<ColorselectoroptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorselectoroptionComponent]
    });
    fixture = TestBed.createComponent(ColorselectoroptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
