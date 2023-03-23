import { DecimalPipe } from '@angular/common';
import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


import { ServeursComponent } from './serveurs.component';

@Component({
  template: `
      <sb-ng-bootstrap-table
          [someInput]="someInput"
          (someFunction)="someFunction($event)"
      ></sb-ng-bootstrap-table>
  `,
})
class TestHostComponent {
  // someInput = 1;
  // someFunction(event: Event) {}
}

describe('ServeursComponent', () => {
  let component: ServeursComponent;
  let fixture: ComponentFixture<ServeursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
