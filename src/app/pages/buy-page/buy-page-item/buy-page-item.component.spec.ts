import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPageItemComponent } from './buy-page-item.component';

describe('BuyPageItemComponent', () => {
  let component: BuyPageItemComponent;
  let fixture: ComponentFixture<BuyPageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyPageItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyPageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
