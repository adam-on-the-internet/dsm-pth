import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaVersionsComponent } from './agenda-versions.component';

describe('AgendaVersionsComponent', () => {
  let component: AgendaVersionsComponent;
  let fixture: ComponentFixture<AgendaVersionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaVersionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaVersionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
