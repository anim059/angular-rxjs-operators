import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchScanComponent } from './switch-scan.component';

describe('SwitchScanComponent', () => {
  let component: SwitchScanComponent;
  let fixture: ComponentFixture<SwitchScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchScanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
