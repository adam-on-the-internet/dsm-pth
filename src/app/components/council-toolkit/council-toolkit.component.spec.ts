import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouncilToolkitComponent } from './council-toolkit.component';

describe('CouncilToolkitComponent', () => {
  let component: CouncilToolkitComponent;
  let fixture: ComponentFixture<CouncilToolkitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouncilToolkitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouncilToolkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
