import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsmUpdatesComponent } from './dsm-updates.component';

describe('DsmUpdatesComponent', () => {
  let component: DsmUpdatesComponent;
  let fixture: ComponentFixture<DsmUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsmUpdatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsmUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
