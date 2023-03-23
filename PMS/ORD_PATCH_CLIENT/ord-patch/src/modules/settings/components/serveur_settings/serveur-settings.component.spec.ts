import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeurSettingsComponent } from './serveur-settings.component';

describe('ServeurSettingsComponent', () => {
  let component: ServeurSettingsComponent;
  let fixture: ComponentFixture<ServeurSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeurSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeurSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
