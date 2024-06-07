import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperViewThreeComponent } from './stepper-view-three.component';

describe('StepperViewThreeComponent', () => {
  let component: StepperViewThreeComponent;
  let fixture: ComponentFixture<StepperViewThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperViewThreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepperViewThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
