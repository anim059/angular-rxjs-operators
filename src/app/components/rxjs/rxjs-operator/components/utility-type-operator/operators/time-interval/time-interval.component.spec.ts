import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeIntervalComponent } from './time-interval.component';

describe('TimeIntervalComponent', () => {
  let component: TimeIntervalComponent;
  let fixture: ComponentFixture<TimeIntervalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeIntervalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
