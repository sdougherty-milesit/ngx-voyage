import { Component, model } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { DrawerModule } from "primeng/drawer";
import { routes } from "./app.routes";
import { NavComponent } from "./nav.component";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

@Component({
  selector: "app-root",
  imports: [
    RouterOutlet,
    NavComponent,
    DrawerModule,
    ButtonModule,
    FaIconComponent,
  ],
  template: `
    <div class="flex  h-full w-full overflow-auto bg-gray-100 dark:bg-gray-800">
      <div class="hidden md:block">
        <app-nav></app-nav>
      </div>
      <p-drawer [(visible)]="showMenu">
        <app-nav></app-nav>
      </p-drawer>

      <div class="container mx-auto p-3">
        <div class="md:hidden ">
          <p-button (click)="showMenu.set(true)" outlined="true">
            <fa-icon [icon]="faBars"></fa-icon>
          </p-button>
        </div>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class AppComponent {
  routes = routes;
  showMenu = model(false);
  faBars = faBars;
}
