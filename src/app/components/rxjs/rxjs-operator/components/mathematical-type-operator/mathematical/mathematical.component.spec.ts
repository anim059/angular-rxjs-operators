import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathematicalComponent } from './mathematical.component';

describe('MathematicalComponent', () => {
  let component: MathematicalComponent;
  let fixture: ComponentFixture<MathematicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathematicalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathematicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
