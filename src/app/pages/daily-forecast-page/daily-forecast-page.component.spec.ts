import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyForecastPageComponent } from './daily-forecast-page.component';

describe('DailyForecastPageComponent', () => {
  let component: DailyForecastPageComponent;
  let fixture: ComponentFixture<DailyForecastPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyForecastPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailyForecastPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
