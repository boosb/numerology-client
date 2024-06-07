import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperViewSixComponent } from './stepper-view-six.component';

describe('StepperViewSixComponent', () => {
  let component: StepperViewSixComponent;
  let fixture: ComponentFixture<StepperViewSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperViewSixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepperViewSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
