import {
  Component,
  computed,
  inject,
  model,
  OnChanges,
  output,
  signal,
  SimpleChanges,
  viewChild,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { Popover, PopoverModule } from "primeng/popover";
import { SelectButtonModule } from "primeng/selectbutton";
import { IconType, VoyageIconComponent } from "../icon";
import { Store, ViewType } from "../model/store";
import { SettingsComponent } from "../settings/settings.component";
import { EditBookmarkComponent } from "./edit-bookmark/edit-bookmark.component";

@Component({
  selector: "ngx-voyage-title",
  standalone: true,
  templateUrl: "./title.component.html",
  styleUrl: "./title.component.css",
  imports: [
    ButtonModule,
    PopoverModule,
    SettingsComponent,
    VoyageIconComponent,
    SelectButtonModule,
    FormsModule,
    EditBookmarkComponent,
  ],
})
export class TitleComponent implements OnChanges {
  store = inject(Store);

  path = model.required<string>();

  bookmarksPopover = viewChild<Popover>("bookmarksPopover");
  bookmarks = this.store.bookmarks;
  bookmark = computed(() =>
    this.bookmarks().find((bookmark) => bookmark.path === this.path()),
  );
  pathIsBookmarked = computed(() => this.bookmark() != undefined);

  pathFragments = computed(() => {
    if (this.path() === "/") {
      return [{ name: "/", path: "/" }];
    }
    return decodeURIComponent(this.path())
      .split("/")
      .reduce((acc: { name: string; path: string }[], cur, i) => {
        if (i === 0) {
          return [{ name: "/", path: "/" }];
        }
        if (cur.length > 0) {
          const prevPath = acc[acc.length - 1].path;
          acc.push({
            path: `${prevPath !== "/" ? prevPath : ""}/${cur}`,
            name: cur,
          });
        }
        return acc;
      }, []);
  });

  navigate = output<string>();
  back = output<void>();
  forward = output<void>();

  history = signal<string[]>([]);
  historyPos = signal(0);

  backButtonDisabled = computed(
    () => this.history().length === 0 || this.historyPos() <= 1,
  );
  forwardButtonDisabled = computed(
    () =>
      this.history().length === 0 ||
      this.historyPos() === this.history().length,
  );

  selectedView = computed(() =>
    this.viewOptions.find(
      (option) => option.type === this.store.selectedView(),
    ),
  );
  viewOptions: { icon: IconType; type: ViewType }[] = [
    {
      icon: "grid",
      type: "grid",
    },
    {
      icon: "list",
      type: "list",
    },
  ];

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

  onAddBookmark(e: Event) {
    this.bookmarksPopover()?.show(e);
    setTimeout(() => {
      const name = this.path().substring(this.path().lastIndexOf("/") + 1);
      this.store.addBookmark({
        icon: "bookmark",
        name,
        path: this.path(),
      });
    });
  }

  onRemoveBookmark() {
    const b = this.bookmark();
    if (b != undefined) {
      this.store.removeBookmark(this.path());
    }
  }

  setSelectedView(viewType: ViewType) {
    this.store.setSelectedView(viewType);
  }
}
