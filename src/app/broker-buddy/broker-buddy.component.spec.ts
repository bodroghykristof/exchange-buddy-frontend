import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerBuddyComponent } from './broker-buddy.component';

describe('BrokerBuddyComponent', () => {
  let component: BrokerBuddyComponent;
  let fixture: ComponentFixture<BrokerBuddyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerBuddyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokerBuddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
