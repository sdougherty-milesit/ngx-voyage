import { File } from "../../../../dist/ngx-voyage";

export const filesMock: File[] = [
  {
    isFile: true,
    isDirectory: false,
    isSymbolicLink: false,
    modifiedDate: new Date(),
    name: ".secrets.txt",
    size: 123456,
  },
  {
    isFile: true,
    isDirectory: false,
    isSymbolicLink: false,
    modifiedDate: new Date(),
    name: "example.component.ts",
    size: 2048,
  },
  {
    isFile: true,
    isDirectory: false,
    isSymbolicLink: false,
    modifiedDate: new Date(),
    name: "README.md",
    size: 210,
  },
  {
    isFile: true,
    isDirectory: false,
    isSymbolicLink: false,
    modifiedDate: new Date(),
    name: "LICENSE.md",
    size: 150,
  },
];
