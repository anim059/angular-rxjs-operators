import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PairwiseComponent } from './pairwise.component';

describe('PairwiseComponent', () => {
  let component: PairwiseComponent;
  let fixture: ComponentFixture<PairwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PairwiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PairwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
