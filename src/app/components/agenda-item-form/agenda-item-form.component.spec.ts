import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AgendaItemFormComponent} from './agenda-item-form.component';
import {LoadingComponent} from "../simple/loading/loading.component";
import {StringInputComponent} from "../simple/form/string-input/string-input.component";
import {FormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('AgendaItemFormComponent', () => {
  let component: AgendaItemFormComponent;
  let fixture: ComponentFixture<AgendaItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AgendaItemFormComponent, LoadingComponent, StringInputComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
