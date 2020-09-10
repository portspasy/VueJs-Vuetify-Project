import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/projects",
    name: "Projects",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "projects" */ "../views/Projects.vue"),
  },
  {
    path: "/doctors",
    name: "Doctors",
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "doctors" */ "../views/Doctors.vue"),
  },
  {
    path: "/patients",
    name: "Patients",
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "patients" */ "../views/Patients.vue"),
  },
  {
    path: "/appointements",
    name: "Appointements",
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "appointements" */ "../views/Appointements.vue"
      ),
  },
  {
    path: "/reports",
    name: "Reports",
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "reports" */ "../views/Reports.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "settings" */ "../views/Settings.vue"),
  },
  {
    path: "/help",
    name: "Help",
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "help" */ "../views/Help.vue"),
  },
  {
    path: "/table",
    name: "Table",
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "table" */ "../views/Table.vue"),
  },

  // otherwise redirect to Error 404
  {
    path: "*",
    name: "404",
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "404" */ "../views/404.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
