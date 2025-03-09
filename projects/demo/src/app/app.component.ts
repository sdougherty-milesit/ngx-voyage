import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { routes } from "./app.routes";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="flex gap-3 h-full w-full bg-gray-100">
      <div class="flex flex-col gap-3 py-3 px-5 ">
        @for (route of routes; track route.path) {
          <a
            class="rounded-md px-3 py-2"
            [routerLink]="route.path"
            routerLinkActive="bg-gray-200"
            [routerLinkActiveOptions]="{ exact: true }"
            >{{ route.title }}</a
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
      <div class="container mx-auto p-3">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class AppComponent {
  routes = routes;
}
