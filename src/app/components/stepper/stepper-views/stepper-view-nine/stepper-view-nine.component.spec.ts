import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperViewNineComponent } from './stepper-view-nine.component';

describe('StepperViewNineComponent', () => {
  let component: StepperViewNineComponent;
  let fixture: ComponentFixture<StepperViewNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperViewNineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepperViewNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
