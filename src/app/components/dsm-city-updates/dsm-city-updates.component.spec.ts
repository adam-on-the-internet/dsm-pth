import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsmCityUpdatesComponent } from './dsm-city-updates.component';

describe('DsmcityNewsPostsComponent', () => {
  let component: DsmCityUpdatesComponent;
  let fixture: ComponentFixture<DsmCityUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsmCityUpdatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsmCityUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
