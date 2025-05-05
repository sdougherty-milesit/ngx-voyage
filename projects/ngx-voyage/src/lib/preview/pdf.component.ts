import {
  AfterViewInit,
  Component,
  ElementRef,
  input,
  OnDestroy,
  viewChild,
} from "@angular/core";

@Component({
  selector: "ngx-voyage-pdf",
  template: ` <iframe #iframe width="1024px"></iframe> `,
  styles: `
    iframe {
      margin: 0 auto;
      width: 100%;
      height: 90vw;

      @media (width >= 64rem /* 1024px */) {
        width: 64rem;
      }
      @media (width >= 80rem /* 1280px */) {
        width: 80rem;
      }
    }
  `,
})
export class PdfComponent implements AfterViewInit, OnDestroy {
  data = input.required<Blob>();
  iframe = viewChild<ElementRef<HTMLIFrameElement>>("iframe");
  objectUrl?: string;

  ngAfterViewInit(): void {
    const objectUrl = URL.createObjectURL(this.data());
    const elt = this.iframe()?.nativeElement;
    if (elt) {
      elt.src = objectUrl;
    }
  }

  ngOnDestroy() {
    URL.revokeObjectURL(this.objectUrl!);
  }
}
