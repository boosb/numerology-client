import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperViewTwelveComponent } from './stepper-view-twelve.component';

describe('StepperViewTwelveComponent', () => {
  let component: StepperViewTwelveComponent;
  let fixture: ComponentFixture<StepperViewTwelveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperViewTwelveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepperViewTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
