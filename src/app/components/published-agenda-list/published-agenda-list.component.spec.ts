import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedAgendaListComponent } from './published-agenda-list.component';

describe('PublishedAgendaListComponent', () => {
  let component: PublishedAgendaListComponent;
  let fixture: ComponentFixture<PublishedAgendaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishedAgendaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedAgendaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
