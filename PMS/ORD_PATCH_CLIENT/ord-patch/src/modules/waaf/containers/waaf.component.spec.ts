import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaafComponent } from './waaf.component';

describe('WaafComponent', () => {
  let component: WaafComponent;
  let fixture: ComponentFixture<WaafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaafComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
