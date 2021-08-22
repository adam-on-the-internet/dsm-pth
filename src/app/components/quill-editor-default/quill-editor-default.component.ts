import {Component, Input} from "@angular/core";
import {StringHelper} from "../../utilities/string.util";

@Component({
  selector: "app-quill-editor-default",
  templateUrl: "./quill-editor-default.component.html",
  styleUrls: ["./quill-editor-default.component.scss"]
})
export class QuillEditorDefaultComponent {
  public modules = null;
  @Input() public content = "";
  @Input() public valueName = null;

  public get labelName(): string {
    return StringHelper.fromHtmlToLabel(this.valueName);
  }

  public get ready(): any {
    return this.modules !== null;
  }

  constructor() {
    this.setupModules();
  }

  private setupModules() {
    this.modules = {
      toolbar: [
        ["bold", "italic", "underline", "strike"],        // toggled buttons

        [{header: 1}, {header: 2}],               // custom button values
        [{list: "ordered"}, {list: "bullet"}],

        [{header: [1, 2, 3, 4, 5, 6, false]}],

        ["link"]                         // link and image, video
      ]
    };
  }
}
