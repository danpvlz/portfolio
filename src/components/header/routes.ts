import type { defaultLang, ui } from "../../i18n/ui";

export interface IRoute {
  access: keyof typeof ui[typeof defaultLang];
  name: string;
  link: string;
}

export const routes: IRoute[] = [
    { access: "nav.home", name: "Home", link: "/#home" },
    { access: "nav.work", name: "Work", link: "/#work" },
    { access: "nav.about", name: "About", link: "/#about" },
    { access: "nav.contact", name: "Contact", link: "/#contact" },
]