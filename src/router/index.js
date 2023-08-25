import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import MoviesView from "../views/MoviesView.vue";

const routes = [
  {
    path: "/",
    name: "MovieList",
    component: HomeView,
  },
  {
    path: "/about/",
    name: "about",
    component: AboutView,
  },
  {
    path: "/movies/:id",
    name: "MovieInfo",
    component: MoviesView,
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
