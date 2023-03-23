import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePlannifComponent } from './table-plannif.component';

describe('TablePlannifComponent', () => {
  let component: TablePlannifComponent;
  let fixture: ComponentFixture<TablePlannifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePlannifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePlannifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
