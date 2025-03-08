import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLatestAllComponent } from './combine-latest-all.component';

describe('CombineLatestAllComponent', () => {
  let component: CombineLatestAllComponent;
  let fixture: ComponentFixture<CombineLatestAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombineLatestAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombineLatestAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
