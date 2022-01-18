import {ComponentFixture, TestBed} from "@angular/core/testing";

import {SignupToSpeakComponent} from "./signup-to-speak.component";
import {FormsModule} from "@angular/forms";

describe("SignupToSpeakComponent", () => {
  let component: SignupToSpeakComponent;
  let fixture: ComponentFixture<SignupToSpeakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupToSpeakComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupToSpeakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
