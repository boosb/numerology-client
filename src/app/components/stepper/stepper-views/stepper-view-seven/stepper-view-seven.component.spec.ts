import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperViewSevenComponent } from './stepper-view-seven.component';

describe('StepperViewSevenComponent', () => {
  let component: StepperViewSevenComponent;
  let fixture: ComponentFixture<StepperViewSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperViewSevenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepperViewSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
