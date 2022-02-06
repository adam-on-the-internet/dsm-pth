import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CityFoiaComponent} from './city-foia.component';

describe('CityFoiaComponent', () => {
  let component: CityFoiaComponent;
  let fixture: ComponentFixture<CityFoiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CityFoiaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityFoiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
