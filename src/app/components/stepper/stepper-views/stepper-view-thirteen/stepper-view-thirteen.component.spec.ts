import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperViewThirteenComponent } from './stepper-view-thirteen.component';

describe('StepperViewThirteenComponent', () => {
  let component: StepperViewThirteenComponent;
  let fixture: ComponentFixture<StepperViewThirteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperViewThirteenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepperViewThirteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
