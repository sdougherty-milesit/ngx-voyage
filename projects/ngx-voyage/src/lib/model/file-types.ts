import { IconDefinition } from "@fortawesome/angular-fontawesome";
import { File, getFileExtension } from "./model";
import {
  faFile,
  faFileAudio,
  faFileCode,
  faFileExcel,
  faFileImage,
  faFileLines,
  faFilePdf,
  faFileVideo,
  faFileWord,
  faFileZipper,
} from "@fortawesome/free-regular-svg-icons";

export function getFileIcon(file: File): IconDefinition {
  const ext = getFileExtension(file);
  if (ext) {
    return fileTypes[ext]?.icon ?? faFile;
  }
  return faFile;
}

export const ImageExtensions = ["png", "jpg", "jpeg", "gif", "svg"];
export const TextExtensions = [
  "css",
  "html",
  "ts",
  "sh",
  "js",
  "xml",
  "yml",
  "yaml",
  "md",
  "txt",
  "json",
];
export const PreviewExtensions = ["pdf", ...ImageExtensions, ...TextExtensions];

export function canPreviewFile(file: File) {
  const ext = getFileExtension(file);
  if (ext) {
    return PreviewExtensions.includes(ext);
  }
  return false;
}

export const fileTypes: Record<
  string,
  { icon: IconDefinition; description: string }
> = {
  css: { icon: faFileCode, description: "CSS_DOCUMENT" },
  csv: { icon: faFileLines, description: "CSV_DOCUMENT" },
  doc: { icon: faFileWord, description: "WORD_DOCUMENT" },
  docx: { icon: faFileWord, description: "WORD_DOCUMENT" },
  gif: { icon: faFileVideo, description: "GIF_IMAGE" },
  gz: { icon: faFileZipper, description: "ARCHIVE" },
  html: { icon: faFileCode, description: "HTML_DOCUMENT" },
  jpeg: { icon: faFileImage, description: "JPG_IMAGE" },
  jpg: { icon: faFileImage, description: "JPG_IMAGE" },
  js: { icon: faFileCode, description: "JS_DOCUMENT" },
  json: { icon: faFileCode, description: "JSON_DOCUMENT" },
  log: { icon: faFileLines, description: "LOG_DOCUMENT" },
  md: { icon: faFileCode, description: "MARKDOWN_DOCUMENT" },
  mov: { icon: faFileVideo, description: "QUICKTIME_MOVIE" },
  mp3: { icon: faFileAudio, description: "MP3_AUDIO" },
  mp4: { icon: faFileVideo, description: "MP4_MOVIE" },
  mpg: { icon: faFileVideo, description: "MPEG_MOVIE" },
  pdf: { icon: faFilePdf, description: "PDF_DOCUMENT" },
  png: { icon: faFileImage, description: "PNG_IMAGE" },
  py: { icon: faFileCode, description: "PYTHON_DOCUMENT" },
  sh: { icon: faFileCode, description: "SHELL_SCRIPT" },
  svg: {
    icon: faFileImage,
    description: "SVG_IMAGE",
  },
  tar: { icon: faFileZipper, description: "ARCHIVE" },
  ts: { icon: faFileCode, description: "TS_DOCUMENT" },
  txt: { icon: faFileLines, description: "PLAIN_TEXT" },
  xls: { icon: faFileExcel, description: "EXCEL_DOCUMENT" },
  xlsx: { icon: faFileExcel, description: "EXCEL_DOCUMENT" },
  xml: { icon: faFileCode, description: "XML_DOCUMENT" },
  yaml: { icon: faFileCode, description: "YAML_DOCUMENT" },
  yml: { icon: faFileCode, description: "YAML_DOCUMENT" },
  zip: { icon: faFileZipper, description: "ARCHIVE" },
};
