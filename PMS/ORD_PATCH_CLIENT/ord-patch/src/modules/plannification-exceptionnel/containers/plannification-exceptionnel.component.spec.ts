import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannificationExceptionnelComponent } from './plannification-exceptionnel.component';

describe('PlannificationExceptionnelComponent', () => {
  let component: PlannificationExceptionnelComponent;
  let fixture: ComponentFixture<PlannificationExceptionnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannificationExceptionnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannificationExceptionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
