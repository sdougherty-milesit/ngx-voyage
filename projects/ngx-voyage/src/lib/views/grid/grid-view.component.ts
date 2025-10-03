import { NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { AutoFocusModule } from "primeng/autofocus";
import { ContextMenuModule } from "primeng/contextmenu";
import { VoyageIconComponent } from "../../icon";
import { PreviewComponent } from "../../preview/preview.component";
import { BaseViewComponent } from "../base-view.component";

@Component({
  selector: "ngx-voyage-grid-view",
  standalone: true,
  templateUrl: "./grid-view.component.html",
  imports: [
    VoyageIconComponent,
    ContextMenuModule,
    PreviewComponent,
    NgClass,
    AutoFocusModule,
  ],
  styleUrl: "./grid-view.component.css",
})
export class GridViewComponent extends BaseViewComponent {
  onKeydown(event: KeyboardEvent) {
    const selected = this.selectedFile();
    if (event.key === "ArrowLeft") {
      this.selectNextOrPreviousFile(-1);
    }
    if (event.key === "ArrowRight") {
      this.selectNextOrPreviousFile(1);
    }
    if (event.key === "Enter" && selected) {
      this.onDoubleClick(selected);
    }
  }
}
