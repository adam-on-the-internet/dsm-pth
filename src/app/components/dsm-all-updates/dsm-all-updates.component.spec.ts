import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsmAllUpdatesComponent } from './dsm-all-updates.component';

describe('DsmAllUpdatesComponent', () => {
  let component: DsmAllUpdatesComponent;
  let fixture: ComponentFixture<DsmAllUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsmAllUpdatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsmAllUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
