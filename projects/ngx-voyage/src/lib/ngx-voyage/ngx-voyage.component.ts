import {
  Component,
  input,
  model,
  output,
  ViewEncapsulation,
} from "@angular/core";
import { ProgressBarModule } from "primeng/progressbar";
import { ListComponent } from "../list/list.component";
import { Message } from "../model/message";
import { addType, File, FilePreviewOutput } from "../model/model";
import { TitleComponent } from "../title/title.component";

@Component({
  selector: "ngx-voyage",
  imports: [TitleComponent, ListComponent, ProgressBarModule],
  templateUrl: "./ngx-voyage.component.html",
  encapsulation: ViewEncapsulation.None,
  host: {
    class: "flex flex-col h-full overflow-hidden",
  },
  styleUrls: [
    "ngx-voyage.component.css",
    "../../../../../node_modules/@fortawesome/fontawesome-free/css/fontawesome.css",
    "../../../../../node_modules/@fortawesome/fontawesome-free/css/solid.css",
    "../../../../../node_modules/@fortawesome/fontawesome-free/css/regular.css",
    "../../../../../node_modules/@fortawesome/fontawesome-free/css/brands.css",
  ],
})
export class NgxVoyageComponent {
  /**
   * current folder path to display in the title bar
   * example: '/home/bob/'
   */
  path = model.required<string>();

  /**
   * list if files contained in the current folder
   */
  files = input.required<File[], File[]>({
    transform: (files) => {
      files.forEach((f) => addType(f));
      return files;
    },
  });

  /**
   * An error message to display instead of the file listing
   * example: a network or permission error prevents displaying files
   */
  message = input<Message>();

  /**
   * true to display a loading indicator while files are loading
   */
  loading = input<boolean>(false);

  /**
   * CSS class to add to the top level element
   */
  styleClass = input("");

  openFolder = output<string>();
  openFile = output<string>();

  /**
   * Fired when the user requests to preview the content of a file.
   * This provides a `FilePreviewOutput` as `$event`,
   * allowing you to provide the file content in a callback. Example:
   *
   *  preview({ path, cb }: FilePreviewOutput) {
   *    const blob = new Blob(['Hello world'], {
   *      type: "text/plain",
   *    });
   *    cb(blob);
   *  }
   *
   * Preview the content of a file
   */
  previewFile = output<FilePreviewOutput>();

  onOpenFolder(folderPath: string) {
    console.log("oink", folderPath);
    this.path.set(folderPath);
    this.openFolder.emit(folderPath);
  }
}
