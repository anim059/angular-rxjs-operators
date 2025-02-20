import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeScanComponent } from './merge-scan.component';

describe('MergeScanComponent', () => {
  let component: MergeScanComponent;
  let fixture: ComponentFixture<MergeScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MergeScanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MergeScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
