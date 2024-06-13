import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperViewSeventeenComponent } from './stepper-view-seventeen.component';

describe('StepperViewSeventeenComponent', () => {
  let component: StepperViewSeventeenComponent;
  let fixture: ComponentFixture<StepperViewSeventeenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperViewSeventeenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepperViewSeventeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
