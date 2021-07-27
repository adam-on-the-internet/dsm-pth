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
    if (this.typeInvalid) {
      myErrors.push("Please provide a type.");
    }
    if (this.timeInvalid) {
      myErrors.push("Please provide a time.");
    }
    if (this.placeInvalid) {
      myErrors.push("Please provide a place.");
    }
    if (this.linksInvalid) {
      myErrors.push("Please provide text and a url for each link.");
    }
    return myErrors;
  }

  public get valid(): boolean {
    return this.errors.length === 0;
  }

  private get nameInvalid(): boolean {
    return !BooleanHelper.hasValue(this.meetingAgenda.name);
  }

  private get timeInvalid(): boolean {
    return !BooleanHelper.hasValue(this.meetingAgenda.time);
  }

  private get typeInvalid(): boolean {
    return !BooleanHelper.hasValue(this.meetingAgenda.type);
  }

  private get placeInvalid(): boolean {
    return !BooleanHelper.hasValue(this.meetingAgenda.place);
  }

  private get linksInvalid(): boolean {
    return this.meetingAgenda.links.some((link) => {
      return BooleanHelper.hasNoValue(link.url) || BooleanHelper.hasNoValue(link.text);
    });
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

  public addLink() {
    this.meetingAgenda.links.push({
      text: "",
      url: "",
      description: "",
    });
  }

  public removeLink(index: number) {
    this.meetingAgenda.links.splice(index, 1);
  }

  private runCreate() {
    let response;
    this.meetingAgendaService.createMeetingAgenda(this.meetingAgenda)
      .subscribe((res) => response = res, (error) => {
        console.log(error);
      }, () => {
        this.navHelper.goToAgendaDetails(response._id);
      });
  }

  private runUpdate() {
    let response;
    this.meetingAgendaService.updateMeetingAgenda(this.meetingAgenda)
      .subscribe((res) => response = res, (error) => {
        console.log(error);
      }, () => {
        this.navHelper.goToAgendaDetails(response._id);
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
      time: "",
      type: "",
      place: "",
      links: [],
      tags: [],
      highlights: [],
      description: "",
      subtitle: "",
      _id: null,
    }
  }
}
