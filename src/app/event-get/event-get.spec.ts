import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventGet } from './event-get';

describe('EventGet', () => {
  let component: EventGet;
  let fixture: ComponentFixture<EventGet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventGet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventGet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
