import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinCreationComponent } from './join-creation.component';

describe('JoinCreationComponent', () => {
  let component: JoinCreationComponent;
  let fixture: ComponentFixture<JoinCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinCreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
