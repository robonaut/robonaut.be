import Home from "../components/Home";
import Login from "../components/Login";
import Projects from "../components/Projects";
import i18n from "../i18n";

export const routeDefinitions = [
  {
    key: "home",
    title: i18n.t("navigation.home.title"),
    path: "/",
    Component: Home,
  },
  {
    key: "login",
    title: i18n.t("navigation.login.title"),
    path: "/login",
    Component: Login,
  },
  {
    key: "projecgts",
    title: i18n.t("navigation.projects.title"),
    path: "/projects",
    Component: Projects,
  },
];
