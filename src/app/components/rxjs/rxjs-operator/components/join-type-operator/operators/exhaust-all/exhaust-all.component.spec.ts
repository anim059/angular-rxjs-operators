import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhaustAllComponent } from './exhaust-all.component';

describe('ExhaustAllComponent', () => {
  let component: ExhaustAllComponent;
  let fixture: ComponentFixture<ExhaustAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExhaustAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExhaustAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
