import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DematerializeComponent } from './dematerialize.component';

describe('DematerializeComponent', () => {
  let component: DematerializeComponent;
  let fixture: ComponentFixture<DematerializeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DematerializeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DematerializeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
