import About from "../components/About";
import Contact from "../components/Contact";
import Login from "../components/Login";
import Projects from "../components/Projects";
import i18n from "../i18n";

export const routeDefinitions = [
  {
    key: "login",
    title: i18n.t("navigation.login.title"),
    path: "/login",
    Component: Login,
  },
  {
    key: "about",
    title: i18n.t("navigation.about.title"),
    path: "/",
    Component: About,
  },
  {
    key: "projects",
    title: i18n.t("navigation.projects.title"),
    path: "/projects",
    Component: Projects,
  },
  {
    key: "contact",
    title: i18n.t("navigation.contact.title"),
    path: "/contact",
    Component: Contact,
  },
];
