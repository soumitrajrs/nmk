import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallticketComponent } from './hallticket.component';

describe('HallticketComponent', () => {
  let component: HallticketComponent;
  let fixture: ComponentFixture<HallticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
