import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyForecastItemComponent } from './daily-forecast-item.component';

describe('DailyForecastItemComponent', () => {
  let component: DailyForecastItemComponent;
  let fixture: ComponentFixture<DailyForecastItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyForecastItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailyForecastItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
