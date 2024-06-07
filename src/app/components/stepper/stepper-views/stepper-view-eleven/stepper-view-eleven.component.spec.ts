import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperViewElevenComponent } from './stepper-view-eleven.component';

describe('StepperViewElevenComponent', () => {
  let component: StepperViewElevenComponent;
  let fixture: ComponentFixture<StepperViewElevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperViewElevenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepperViewElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
