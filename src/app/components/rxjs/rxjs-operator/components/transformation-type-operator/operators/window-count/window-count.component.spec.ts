import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowCountComponent } from './window-count.component';

describe('WindowCountComponent', () => {
  let component: WindowCountComponent;
  let fixture: ComponentFixture<WindowCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowCountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
