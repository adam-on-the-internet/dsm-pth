import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { InfoComponent } from "./info.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HeaderComponent } from "../header/header.component";
import { BodyComponent } from "../body/body.component";
import { CardComponent } from "../simple/card/card.component";

describe("InfoComponent", () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        InfoComponent,
        HeaderComponent, BodyComponent, CardComponent
      ],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
