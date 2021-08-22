import {Component, OnInit, ViewChild} from "@angular/core";
import {AgendaItem} from "../../models/MeetingAgenda.model";
import {BooleanHelper} from "../../utilities/boolean.util";
import {NavHelperService} from "../../services/nav-helper.service";
import {MeetingAgendaService} from "../../services/meeting-agenda.service";
import {ActivatedRoute} from "@angular/router";
import {LinkListComponent} from "../simple/link-list/link-list.component";

@Component({
  selector: "app-agenda-item-form",
  templateUrl: "./agenda-item-form.component.html",
  styleUrls: ["./agenda-item-form.component.scss"]
})
export class AgendaItemFormComponent implements OnInit {
  @ViewChild("cityAttachmentsInput", null) public cityAttachmentsInput: LinkListComponent;
  @ViewChild("ourLinksInput", null) public ourLinksInput: LinkListComponent;

  public agendaItem: AgendaItem = null;
  public showErrors = false;
  private itemId: string = null;
  private meetingId: string = null;

  public get modeText(): string {
    return this.editMode ? "Edit" : "Add";
  }

  public get editMode(): boolean {
    return BooleanHelper.hasValue(this.itemId);
  }

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.agendaItem);
  }

  public get errors(): string[] {
    const myErrors = [];
    if (this.nameInvalid) {
      myErrors.push("Please provide a name.");
    }
    if (this.sectionInvalid) {
      myErrors.push("Please provide a section.");
    }
    if (this.cityTextInvalid) {
      myErrors.push("Please provide city text.");
    }
    if (this.cityAttachmentsInput.linksInvalid) {
      myErrors.push("Please provide text and a url for each 'city attachments' link.");
    }
    if (this.ourLinksInput.linksInvalid) {
      myErrors.push("Please provide text and a url for each 'our links' link.");
    }
    return myErrors;
  }

  public get valid(): boolean {
    return this.errors.length === 0;
  }

  private get nameInvalid(): boolean {
    return !BooleanHelper.hasValue(this.agendaItem.name);
  }

  private get cityTextInvalid(): boolean {
    return !BooleanHelper.hasValue(this.agendaItem.cityText);
  }

  private get sectionInvalid(): boolean {
    return !BooleanHelper.hasValue(this.agendaItem.section);
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

  public submit(addAnother: boolean): void {
    this.showErrors = true;
    if (this.valid) {
      if (this.editMode) {
        this.runUpdate(addAnother);
      } else {
        this.runCreate(addAnother);
      }
    }
  }

  private runCreate(addAnother: boolean) {
    let response;
    this.meetingAgendaService.createAgendaItem(this.agendaItem)
      .subscribe((res) => response = res,
        (error) => {
          console.log(error);
        }, () => {
          this.finish(response._id, addAnother);
        });
  }

  private runUpdate(addAnother: boolean) {
    let response;
    this.meetingAgendaService.updateAgendaItem(this.agendaItem)
      .subscribe((res) => response = res,
        (error) => {
          console.log(error);
        }, () => {
          this.finish(response._id, addAnother);
        });
  }

  private finish(id, addAnother: boolean) {
    if (addAnother) {
      this.prepAddAnother();
    } else {
      this.navHelper.goToAgendaItemDetails(id);
    }
  }

  private prepAddAnother() {
    this.itemId = null;
    this.showErrors = false;
    this.buildAgendaItem(this.agendaItem.section);
  }

  private setup(): void {
    this.agendaItem = null;
    this.itemId = this.route.snapshot.paramMap.get("itemId");
    if (this.editMode) {
      this.setupEdit();
    } else {
      this.setupAdd();
    }
  }

  private setupEdit() {
    this.meetingAgendaService.getSingleAgendaItem(this.itemId)
      .subscribe((res) => this.agendaItem = res);
  }

  private setupAdd() {
    this.meetingId = this.route.snapshot.paramMap.get("meetingId");
    this.buildAgendaItem();
  }

  private buildAgendaItem(section: string = "") {
    this.agendaItem = {
      name: "",
      section,
      cityText: "",
      ourText: "",
      cityAttachments: [],
      ourComments: [],
      ourLinks: [],
      tags: [],
      ourPriority: 1,
      meetingAgendaId: this.meetingId,
      _id: null,
    };
  }
}
