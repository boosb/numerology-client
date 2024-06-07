import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperViewTenComponent } from './stepper-view-ten.component';

describe('StepperViewTenComponent', () => {
  let component: StepperViewTenComponent;
  let fixture: ComponentFixture<StepperViewTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperViewTenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepperViewTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
