import { Component, model } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { routes } from "./app.routes";
import { NavComponent } from "./nav.component";
import { DrawerModule } from "primeng/drawer";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, NavComponent, DrawerModule, ButtonModule],
  template: `
    <div
      class="flex gap-3 h-full w-full overflow-auto bg-gray-100 dark:bg-gray-800"
    >
      <div class="hidden md:block">
        <app-nav></app-nav>
      </div>
      <p-drawer [(visible)]="showMenu">
        <app-nav></app-nav>
      </p-drawer>

      <div class="container mx-auto p-3">
        <div class="md:hidden ">
          <p-button (click)="showMenu.set(true)" outlined="true"
            ><i class="fa-solid fa-bars"></i
          ></p-button>
        </div>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class AppComponent {
  routes = routes;
  showMenu = model(false);
}
