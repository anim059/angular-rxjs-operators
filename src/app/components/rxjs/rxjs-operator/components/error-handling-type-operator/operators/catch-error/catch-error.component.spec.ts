import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchErrorComponent } from './catch-error.component';

describe('CatchErrorComponent', () => {
  let component: CatchErrorComponent;
  let fixture: ComponentFixture<CatchErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatchErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatchErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
