import { AfterViewInit, Component, inject, model, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";
import {
  File,
  FilePreviewOutput,
  NgxVoyageComponent,
} from "../../../../../ngx-voyage/src/public-api";
import { scrollOnInit } from "../scroll";
import { SideNavComponent, SideNavLink } from "../sidenav.component";

@Component({
  selector: "app-reference",
  standalone: true,
  imports: [NgxVoyageComponent, SideNavComponent],
  templateUrl: "./ref.component.html",
})
export class ReferenceComponent implements OnInit, AfterViewInit {
  route = inject(ActivatedRoute);
  path = model("/path/to/nested/folder");

  sideNavLinks: SideNavLink[] = [
    {
      id: "files",
      href: "reference#files",
      text: "Files & folders",
    },
    {
      id: "folders",
      href: "reference#folders",
      text: "Folder navigation",
    },
    {
      id: "previewfile",
      href: "reference#previewfile",
      text: "Preview a file",
    },
    {
      id: "openfile",
      href: "reference#openfile",
      text: "Open a file",
    },
    {
      id: "loading",
      href: "reference#loading",
      text: "Loading",
    },
    {
      id: "message",
      href: "reference#message",
      text: "Messages",
    },
    {
      id: "templates",
      href: "reference#templates",
      text: "Header & footer templates",
    },
  ];

  filesExample: File[] = [
    {
      isDirectory: false,
      isFile: true,
      isSymbolicLink: false,
      modifiedDate: new Date(),
      name: "file.txt",
      size: 1024,
    },
    {
      isDirectory: true,
      isFile: false,
      isSymbolicLink: false,
      modifiedDate: new Date(),
      name: "folder",
      size: 1,
    },
  ];

  file: File = {
    isDirectory: false,
    isFile: true,
    isSymbolicLink: false,
    modifiedDate: new Date(),
    name: "file.txt",
    size: 1024,
  };

  ngOnInit(): void {
    hljs.registerLanguage("html", html);
    hljs.registerLanguage("typescript", typescript);
    hljs.highlightAll();
  }

  ngAfterViewInit(): void {
    scrollOnInit(this.route);
  }

  openFile(path: string) {
    alert(`Opening file ${path}`);
  }

  previewFile(preview: FilePreviewOutput) {
    preview.cb(new Blob([`File content: ${preview.path}`]));
  }
}
