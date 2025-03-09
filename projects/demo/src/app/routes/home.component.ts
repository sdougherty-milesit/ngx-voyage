import { Component } from "@angular/core";
import {
  FilePreviewOutput,
  NgxVoyageComponent,
} from "../../../../../dist/ngx-voyage";
import { ButtonModule } from "primeng/button";
import { RouterLink } from "@angular/router";
import { filesContentMock, filesMock } from "../mocks/files.mock";

@Component({
  selector: "app-home",
  template: `
    <div class=" max-w-[40rem] mx-auto flex flex-col gap-10  ">
      <div class="text-center flex flex-col gap-3 ">
        <h1 class="text-4xl font-semibold">ngx-voyage</h1>
        <h2 class="text-2xl">
          File Explorer Component for Angular and PrimeNG
        </h2>
        <div class="flex gap-3 mx-auto">
          <p-button routerLink="/quickstart"
            ><i class="fa-solid fa-arrow-right text-xl"></i> Get
            started</p-button
          >
          <a
            href="https://github.com/mschn/ngx-voyage"
            target="_blank"
            rel="noopener noreferrer"
            class="p-button p-button-secondary"
          >
            <i class="fa-brands fa-github text-xl"></i> Github
          </a>
        </div>
      </div>
      <div class="shadow-2xl h-[30rem]">
        <ngx-voyage
          path="/home/voyage"
          [files]="files"
          (previewFile)="preview($event)"
          styleClass="border border-gray-400 rounded-lg"
        >
        </ngx-voyage>
      </div>
    </div>
  `,
  imports: [NgxVoyageComponent, ButtonModule, RouterLink],
})
export class HomeComponent {
  files = filesMock;
  preview({ path, cb }: FilePreviewOutput) {
    const blob = new Blob([filesContentMock[path]], {
      type: "text/plain",
    });
    cb(blob);
  }
}
