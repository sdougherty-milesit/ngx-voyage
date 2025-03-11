import {
  Component,
  computed,
  model,
  OnChanges,
  output,
  signal,
  SimpleChanges,
} from "@angular/core";
import { ButtonModule } from "primeng/button";
import { PopoverModule } from "primeng/popover";
import { SettingsComponent } from "../settings/settings.component";

@Component({
  selector: "ngx-voyage-title",
  templateUrl: "./title.component.html",
  imports: [ButtonModule, PopoverModule, SettingsComponent],
})
export class TitleComponent implements OnChanges {
  path = model.required<string>();

  pathWithRoot = computed(() => {
    if (this.path() === "/") {
      return [{ name: "/", path: "/" }];
    }
    return decodeURIComponent(this.path())
      .split("/")
      .reduce((acc: { name: string; path: string }[], cur, i) => {
        if (i === 0) {
          return [{ name: "/", path: "/" }];
        }
        const prevPath = acc[acc.length - 1].path;
        acc.push({
          path: `${prevPath !== "/" ? prevPath : ""}/${cur}`,
          name: cur,
        });
        return acc;
      }, []);
  });

  navigate = output<string>();
  back = output<void>();
  forward = output<void>();

  history = signal<string[]>([]);
  historyPos = signal(0);

  backButtonDisabled = computed(
    () => this.history().length === 0 || this.historyPos() <= 1
  );
  forwardButtonDisabled = computed(
    () =>
      this.history().length === 0 || this.historyPos() === this.history().length
  );

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["path"]) {
      if (this.history()[this.historyPos() - 1] === this.path()) {
        // the path change was caused by the back/forward history navigation
        // in that case we don't want to alter the history
        return;
      }

      const newHist = [
        ...this.history().slice(0, this.historyPos()),
        this.path(),
      ];
      this.history.set(newHist);
      this.historyPos.set(this.historyPos() + 1);
    }
  }

  onBack() {
    if (this.historyPos() > 0) {
      this.historyPos.set(this.historyPos() - 1);
      this.path.set(this.history()[this.historyPos() - 1]);
      this.navigate.emit(this.history()[this.historyPos() - 1]);
    }
  }

  onForward() {
    if (this.historyPos() < this.history().length) {
      this.historyPos.set(this.historyPos() + 1);
      this.path.set(this.history()[this.historyPos() - 1]);
      this.navigate.emit(this.history()[this.historyPos() - 1]);
    }
  }
}
