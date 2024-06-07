import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperViewFifteenComponent } from './stepper-view-fifteen.component';

describe('StepperViewFifteenComponent', () => {
  let component: StepperViewFifteenComponent;
  let fixture: ComponentFixture<StepperViewFifteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperViewFifteenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepperViewFifteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
