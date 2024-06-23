import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperErrorComponent } from './error.component';

describe('StepperErrorComponent', () => {
  let component: StepperErrorComponent;
  let fixture: ComponentFixture<StepperErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperErrorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepperErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
