import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperViewEightComponent } from './stepper-view-eight.component';

describe('StepperViewEightComponent', () => {
  let component: StepperViewEightComponent;
  let fixture: ComponentFixture<StepperViewEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperViewEightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepperViewEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
