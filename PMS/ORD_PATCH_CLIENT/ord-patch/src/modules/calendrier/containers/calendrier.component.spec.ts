import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierPageComponent } from './calendrier.component';

describe('CalendrierComponent', () => {
  let component: CalendrierPageComponent;
  let fixture: ComponentFixture<CalendrierPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendrierPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendrierPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
