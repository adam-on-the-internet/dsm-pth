import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {PublishedAgendaComponent} from "./published-agenda.component";
import {CardComponent} from "../simple/card/card.component";
import {LinkDisplayComponent} from "../link-display/link-display.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {SelectInputComponent} from "../select-input/select-input.component";
import {LoadingComponent} from "../simple/loading/loading.component";
import {RouterTestingModule} from "@angular/router/testing";
import {FormsModule} from "@angular/forms";
import {QuillViewDefaultComponent} from "../quill-view-default/quill-view-default.component";

describe("PublishedAgendaComponent", () => {
  let component: PublishedAgendaComponent;
  let fixture: ComponentFixture<PublishedAgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PublishedAgendaComponent, CardComponent, LinkDisplayComponent, SelectInputComponent,
        LoadingComponent, QuillViewDefaultComponent, QuillViewDefaultComponent,
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
