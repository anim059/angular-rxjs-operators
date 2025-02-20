import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowTimeComponent } from './window-time.component';

describe('WindowTimeComponent', () => {
  let component: WindowTimeComponent;
  let fixture: ComponentFixture<WindowTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowTimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
