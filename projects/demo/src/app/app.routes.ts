import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    title: "Home",
    path: "",
    loadComponent: () =>
      import("./routes/home.component").then((c) => c.HomeComponent),
  },
  {
    title: "Quickstart",
    path: "quickstart",
    loadComponent: () =>
      import("./routes/quickstart.component").then(
        (c) => c.QuickstartComponent
      ),
  },
];
