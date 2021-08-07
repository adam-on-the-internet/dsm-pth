import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedAgendaComponent } from './published-agenda.component';

describe('PublishedAgendaComponent', () => {
  let component: PublishedAgendaComponent;
  let fixture: ComponentFixture<PublishedAgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishedAgendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
