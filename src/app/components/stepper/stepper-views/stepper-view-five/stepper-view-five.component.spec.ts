import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperViewFiveComponent } from './stepper-view-five.component';

describe('StepperViewFiveComponent', () => {
  let component: StepperViewFiveComponent;
  let fixture: ComponentFixture<StepperViewFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperViewFiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepperViewFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
