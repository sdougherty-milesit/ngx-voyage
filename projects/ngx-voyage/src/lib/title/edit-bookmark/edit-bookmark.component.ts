import { Component, inject, input, output, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { TranslatePipe } from "../../i18n/translate.pipe";
import { Bookmark } from "../../model/bookmark";
import { Store } from "../../model/store";

@Component({
  selector: "ngx-voyage-edit-bookmark",
  standalone: true,
  imports: [FormsModule, InputTextModule, ButtonModule, TranslatePipe],
  template: `
    <div class="edit-bookmarks">
      <h3>{{ "EDIT_BOOKMARK" | translate }}</h3>
      <input
        type="text"
        pInputText
        [(ngModel)]="name"
        data-testid="edit-bookmark-input"
      />
      <div class="buttons">
        <p-button severity="secondary" (onClick)="remove()">{{
          "REMOVE" | translate
        }}</p-button>
        <p-button (onClick)="save()">{{ "SAVE" | translate }}</p-button>
      </div>
    </div>
  `,
  styles: `
    .edit-bookmarks {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      .buttons {
        display: flex;
        justify-content: flex-end;
        gap: 0.75rem;
      }
    }
  `,
})
export class EditBookmarkComponent {
  #store = inject(Store);

  done = output<void>();
  bookmark = input<Bookmark>();
  name = signal(this.bookmark()?.name ?? "");

  remove() {
    const bookmark = this.bookmark();
    if (bookmark != null) {
      this.#store.removeBookmark(bookmark.path);
    }
    this.done.emit();
  }

  save() {
    const bookmark = this.bookmark();
    const name = this.name();
    if (bookmark != null && name != null && name.length > 0) {
      this.#store.setBookmark({
        ...bookmark,
        name,
      });
    }
    this.done.emit();
  }
}
