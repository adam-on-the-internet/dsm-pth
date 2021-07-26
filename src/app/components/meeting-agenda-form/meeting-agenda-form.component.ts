import {Component, OnInit} from '@angular/core';
import {NavHelperService} from "../../services/nav-helper.service";
import {MeetingAgendaService} from "../../services/meeting-agenda.service";
import {MeetingAgenda} from "../../models/MeetingAgenda.model";
import {BooleanHelper} from "../../utilities/boolean.util";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-meeting-agenda-form',
  templateUrl: './meeting-agenda-form.component.html',
  styleUrls: ['./meeting-agenda-form.component.scss']
})
export class MeetingAgendaFormComponent implements OnInit {
  public meetingAgenda: MeetingAgenda = null;
  public showErrors = false;
  private id: string = null;

  public get modeText(): string {
    return this.editMode ? "Edit" : "Add";
  }

  public get editMode(): boolean {
    return BooleanHelper.hasValue(this.id);
  }

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.meetingAgenda);
  }

  public get errors(): string[] {
    const myErrors = [];
    if (this.nameInvalid) {
      myErrors.push("Please provide a name.");
    }
    return myErrors;
  }

  public get valid(): boolean {
    return this.errors.length === 0;
  }

  private get nameInvalid(): boolean {
    return !BooleanHelper.hasValue(this.meetingAgenda.name);
  }

  constructor(
    private navHelper: NavHelperService,
    private meetingAgendaService: MeetingAgendaService,
    private route: ActivatedRoute,
  ) {
  }

  public ngOnInit() {
    this.setup();
  }

  public submit(): void {
    this.showErrors = true;
    if (this.valid) {
      if (this.editMode) {
        this.runUpdate();
      } else {
        this.runCreate();
      }
    }
  }

  private runCreate() {
    let response;
    this.meetingAgendaService.createMeetingAgenda(this.meetingAgenda)
      .subscribe((res) => response = res, (error) => {
        console.log(error);
      }, () => {
        // TODO, go to actual agenda
        this.navHelper.goToAgendaManagement();
      });
  }

  private runUpdate() {
    let response;
    this.meetingAgendaService.updateMeetingAgenda(this.meetingAgenda)
      .subscribe((res) => response = res, (error) => {
        console.log(error);
      }, () => {
        // TODO, go to actual agenda
        this.navHelper.goToAgendaManagement();
      });
  }

  private setup(): void {
    this.meetingAgenda = null;
    this.id = this.route.snapshot.paramMap.get("id");
    if (this.editMode) {
      this.setupEdit();
    } else {
      this.setupAdd();
    }
  }

  private setupEdit() {
    this.meetingAgendaService.getSingleMeetingAgenda(this.id)
      .subscribe((res) => this.meetingAgenda = res);
  }

  private setupAdd() {
    this.meetingAgenda = {
      name: "",
      _id: null,
    }
  }
}
