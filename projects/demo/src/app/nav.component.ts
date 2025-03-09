import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { routes } from "./app.routes";

@Component({
  selector: "app-nav",
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div class="flex flex-col gap-3 py-3 px-5 ">
      @for (route of routes; track route.path) {
        <a
          class="rounded-md px-3 py-2 text-nowrap"
          [routerLink]="route.path"
          routerLinkActive="bg-gray-200"
          [routerLinkActiveOptions]="{ exact: true }"
          >{{ route.data!["name"] }}</a
        >
      }

      <hr class="border-gray-300" />

      <div class="pt-3 px-3 text-gray-600 flex gap-3 text-2xl">
        <a
          href="https://github.com/mschn/ngx-voyage"
          target="_blank"
          rel="noopener noreferrer"
          ><i class="fa-brands fa-github"></i
        ></a>

        <a
          href="https://www.npmjs.com/package/ngx-voyage"
          target="_blank"
          rel="noopener noreferrer"
          ><i class="fa-brands fa-npm"></i
        ></a>
      </div>
    </div>
  `,
})
export class NavComponent {
  routes = routes;
}
