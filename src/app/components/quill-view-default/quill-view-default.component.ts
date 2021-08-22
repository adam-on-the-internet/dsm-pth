import {Component, Input} from "@angular/core";

@Component({
  selector: "app-quill-view-default",
  templateUrl: "./quill-view-default.component.html",
  styleUrls: ["./quill-view-default.component.scss"]
})
export class QuillViewDefaultComponent {
  @Input() public content;
}
