import { Component, input } from "@angular/core";
import { VoyageIconComponent } from "../icon";
import { Message } from "../model/message";

@Component({
  selector: "ngx-voyage-message",
  imports: [VoyageIconComponent],
  template: `
    @switch (message()?.type) {
      @case ("info") {
        <div
          class="p-4 border rounded-md flex gap-2 items-center bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-500"
        >
          <ngx-voyage-icon type="circle-info"></ngx-voyage-icon>
          <span>{{ message()?.text }}</span>
        </div>
      }
      @case ("warn") {
        <div
          class="p-4 border rounded-md flex gap-2 items-center bg-orange-100 dark:bg-orange-800 text-orange-700 dark:text-orange-300 border-orange-500"
        >
          <ngx-voyage-icon type="triangle-exclamation"></ngx-voyage-icon>
          <span>{{ message()?.text }}</span>
        </div>
      }
      @case ("error") {
        <div
          class="p-4 border rounded-md flex gap-2 items-center bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-300 border-red-500"
        >
          <ngx-voyage-icon type="circle-xmark"></ngx-voyage-icon>
          <span>{{ message()?.text }}</span>
        </div>
      }
    }
  `,
})
export class MessageComponent {
  message = input<Message | undefined>();
}
