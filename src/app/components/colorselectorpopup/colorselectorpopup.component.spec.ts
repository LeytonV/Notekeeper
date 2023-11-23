import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorselectorpopupComponent } from './colorselectorpopup.component';

describe('ColorselectorpopupComponent', () => {
  let component: ColorselectorpopupComponent;
  let fixture: ComponentFixture<ColorselectorpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorselectorpopupComponent]
    });
    fixture = TestBed.createComponent(ColorselectorpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
