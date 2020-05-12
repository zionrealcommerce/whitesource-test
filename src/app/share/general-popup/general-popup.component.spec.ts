import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPopupComponent } from './general-popup.component';

describe('GeneralPopupComponent', () => {
  let component: GeneralPopupComponent;
  let fixture: ComponentFixture<GeneralPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
