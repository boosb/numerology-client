import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperViewTwoComponent } from './stepper-view-two.component';

describe('StepperViewTwoComponent', () => {
  let component: StepperViewTwoComponent;
  let fixture: ComponentFixture<StepperViewTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperViewTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepperViewTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
