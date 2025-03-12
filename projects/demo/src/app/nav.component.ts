import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { routes } from "./app.routes";
import { faGithub, faNpm } from "@fortawesome/free-brands-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

@Component({
  selector: "app-nav",
  imports: [RouterLink, RouterLinkActive, FaIconComponent],
  template: `
    <div class="flex flex-col gap-3 py-3 px-5 ">
      @for (route of routes; track route.path) {
        <a
          class="rounded-md px-3 py-2 text-nowrap dark:text-gray-200"
          [routerLink]="route.path"
          routerLinkActive="bg-gray-200 dark:bg-gray-700"
          [routerLinkActiveOptions]="{ exact: true }"
          >{{ route.data!["name"] }}</a
        >
      }

      <hr class="border-gray-300 dark:border-gray-600" />

      <div
        class="pt-3 px-3 text-gray-600 dark:text-gray-400 flex gap-3 text-2xl"
      >
        <a
          href="https://github.com/mschn/ngx-voyage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <fa-icon [icon]="faGithub"></fa-icon>
        </a>

        <a
          href="https://www.npmjs.com/package/ngx-voyage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <fa-icon [icon]="faNpm"></fa-icon>
        </a>
      </div>
    </div>
  `,
})
export class NavComponent {
  routes = routes;

  faGithub = faGithub;
  faNpm = faNpm;
}
