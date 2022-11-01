import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyMapComponent } from './currency-map.component';

describe('CurrencyMapComponent', () => {
  let component: CurrencyMapComponent;
  let fixture: ComponentFixture<CurrencyMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
