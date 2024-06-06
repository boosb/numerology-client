import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperViewOneComponent } from './stepper-view-one.component';

describe('StepperViewOneComponent', () => {
  let component: StepperViewOneComponent;
  let fixture: ComponentFixture<StepperViewOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperViewOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepperViewOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
