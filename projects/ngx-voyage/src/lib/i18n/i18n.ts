import { enUS, fr, Locale } from "date-fns/locale";
import { messages as messagesEn, Messages } from "./en";
import { messages as messagesFr } from "./fr";

export function getMessages(): Messages {
  if (navigator.language.startsWith("fr")) {
    return messagesFr;
  }
  return messagesEn;
}

export function getDateFnsLocale(): Locale {
  if (navigator.language.startsWith("fr")) {
    return fr;
  }
  return enUS;
}
