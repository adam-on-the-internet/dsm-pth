import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {PublishedAgendaComponent} from "./published-agenda.component";
import {CardComponent} from "../simple/card/card.component";
import {LinkDisplayComponent} from "../link-display/link-display.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {SelectInputComponent} from "../select-input/select-input.component";
import {LoadingComponent} from "../simple/loading/loading.component";
import {RouterTestingModule} from "@angular/router/testing";
import {FormsModule} from "@angular/forms";

describe("PublishedAgendaComponent", () => {
  let component: PublishedAgendaComponent;
  let fixture: ComponentFixture<PublishedAgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PublishedAgendaComponent, CardComponent, LinkDisplayComponent, SelectInputComponent,
        LoadingComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
