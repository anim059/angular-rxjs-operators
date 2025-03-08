import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatALLComponent } from './concat-all.component';

describe('ConcatALLComponent', () => {
  let component: ConcatALLComponent;
  let fixture: ComponentFixture<ConcatALLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcatALLComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcatALLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
