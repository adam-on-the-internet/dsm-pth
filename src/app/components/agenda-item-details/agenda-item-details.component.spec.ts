import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {AgendaItemDetailsComponent} from "./agenda-item-details.component";
import {LoadingComponent} from "../simple/loading/loading.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe("AgendaItemDetailsComponent", () => {
  let component: AgendaItemDetailsComponent;
  let fixture: ComponentFixture<AgendaItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AgendaItemDetailsComponent, LoadingComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
