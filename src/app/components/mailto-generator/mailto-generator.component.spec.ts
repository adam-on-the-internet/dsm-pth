import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailtoGeneratorComponent } from './mailto-generator.component';

describe('MailtoGeneratorComponent', () => {
  let component: MailtoGeneratorComponent;
  let fixture: ComponentFixture<MailtoGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailtoGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailtoGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
