import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperViewFourteenComponent } from './stepper-view-fourteen.component';

describe('StepperViewFourteenComponent', () => {
  let component: StepperViewFourteenComponent;
  let fixture: ComponentFixture<StepperViewFourteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperViewFourteenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepperViewFourteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
