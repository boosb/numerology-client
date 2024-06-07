import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperViewSixteenComponent } from './stepper-view-sixteen.component';

describe('StepperViewSixteenComponent', () => {
  let component: StepperViewSixteenComponent;
  let fixture: ComponentFixture<StepperViewSixteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperViewSixteenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepperViewSixteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
