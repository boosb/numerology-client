import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperViewFourComponent } from './stepper-view-four.component';

describe('StepperViewFourComponent', () => {
  let component: StepperViewFourComponent;
  let fixture: ComponentFixture<StepperViewFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperViewFourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepperViewFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
