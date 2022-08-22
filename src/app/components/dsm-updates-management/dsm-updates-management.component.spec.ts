import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsmUpdatesManagementComponent } from './dsm-updates-management.component';

describe('DsmUpdatesManagementComponent', () => {
  let component: DsmUpdatesManagementComponent;
  let fixture: ComponentFixture<DsmUpdatesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsmUpdatesManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsmUpdatesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
