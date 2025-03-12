import { Component, computed, input } from "@angular/core";
import { Message } from "../model/message";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import {
  faCircleInfo,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

@Component({
  selector: "ngx-voyage-message",
  imports: [FaIconComponent],
  template: `
    @if (message()) {
      <div
        class="p-4 border rounded-md {{ bgColor }} {{
          textColor
        }} flex gap-2 items-center"
      >
        <fa-icon [icon]="icon" class="text-xl"></fa-icon>
        <span>{{ message()?.text }}</span>
      </div>
    }
  `,
})
export class MessageComponent {
  message = input<Message | undefined>();

  classes = {
    error: {
      bg: "bg-red-100 dark:bg-red-800",
      text: "text-red-700 dark:text-red-300",
      icon: faCircleXmark,
    },
    warn: {
      bg: "bg-orange-100 dark:bg-orange-800",
      text: "text-orange-700 dark:text-orange-300",
      icon: faTriangleExclamation,
    },
    info: {
      bg: "bg-gray-100 dark:bg-gray-800",
      text: "text-gray-700 dark:text-gray-300",
      icon: faCircleInfo,
    },
  };

  type = computed(() => this.message()?.type ?? "info");

  get bgColor() {
    return this.classes[this.type()].bg;
  }

  get textColor() {
    return this.classes[this.type()].text;
  }

  get icon() {
    return this.classes[this.type()].icon;
  }
}
