import About from "../components/About";
import Admin from "../components/Admin";
import Contact from "../components/Contact";
import Login from "../components/Login";
import NotFound from "../components/NotFound";
import Projects from "../components/Projects";
import i18n from "../i18n";

export const routeDefinitions = [
  {
    key: "login",
    title: i18n.t("navigation.login.title"),
    path: "/login",
    requiresAuth: false,
    Component: Login,
  },
  {
    key: "about",
    title: i18n.t("navigation.about.title"),
    path: "/",
    requiresAuth: false,
    Component: About,
  },
  {
    key: "projects",
    title: i18n.t("navigation.projects.title"),
    path: "/projects",
    requiresAuth: false,
    Component: Projects,
  },
  {
    key: "contact",
    title: i18n.t("navigation.contact.title"),
    path: "/contact",
    requiresAuth: false,
    Component: Contact,
  },
  {
    key: "admin",
    title: i18n.t("navigation.admin.title"),
    path: "/admin",
    requiresAuth: true,
    Component: Admin,
  },
  {
    key: "404",
    title: i18n.t("navigation.404.title"),
    path: "/404",
    requiresAuth: false,
    Component: NotFound,
  },
];
