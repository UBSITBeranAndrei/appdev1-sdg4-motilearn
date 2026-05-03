import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivationalPopup } from './motivational-popup';

describe('MotivationalPopup', () => {
  let component: MotivationalPopup;
  let fixture: ComponentFixture<MotivationalPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotivationalPopup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotivationalPopup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
