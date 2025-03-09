import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { routes } from "./app.routes";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="flex gap-3 h-full w-full">
      <div class="flex flex-col gap-3 py-3 px-5 bg-gray-100">
        @for (route of routes; track route.path) {
          <a
            class="rounded-md px-3 py-2"
            [routerLink]="route.path"
            routerLinkActive="bg-gray-200"
            [routerLinkActiveOptions]="{ exact: true }"
            >{{ route.title }}</a
          >
        }

        <hr class="border-gray-400" />

        <a
          class="px-3 text-gray-600"
          href="https://github.com/mschn/ngx-voyage"
          target="_blank"
          rel="noopener noreferrer"
          ><i class="fa-brands fa-github text-xl"></i> Github</a
        >

        <a
          class="px-3 text-gray-600"
          href="https://www.npmjs.com/package/ngx-voyage"
          target="_blank"
          rel="noopener noreferrer"
          ><i class="fa-brands fa-npm text-xl"></i> npm</a
        >
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
