# ngx-voyage

ngx-voyage is an Angular File Explorer component built with PrimeNG.

<p align="center">
  <img src="projects/demo/public/readme.png" width="" />
</p>

## Quickstart

Install `ngx-voyage` with `npm`:

```bash
npm install ngx-voyage
```

Use `<ngx-voyage>` in your app:

```ts
import { File, NgxVoyageComponent } from "ngx-voyage";

@Component({
  selector: "app-root",
  imports: [NgxVoyageComponent],
  template: '<ngx-voyage [path]="path()" [files]="files()"></ngx-voyage>',
})
export class AppComponent {
  path = signal("/home/");
  files = signal<File[]>([]);
}
```

## Built with

- [Angular](https://angular.dev/)
- [Tailwind](https://tailwindcss.com/)
- [Primeng](https://primeng.org/)
