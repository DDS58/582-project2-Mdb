import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import TitleView from "../views/TitleView.vue";

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
    component: TitleView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
