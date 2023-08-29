import { defineStore } from "pinia";

export const useMoviestore = defineStore("mstore", {
  state: () => ({
    // to run index.js on codespaces then use this url
    workingUrl:
      "https://vigilant-space-winner-6696pwpw6rr2477v-3000.app.github.dev/",
    // using at home without codespaces for faster dev
    // workingUrl: "http://localhost:3000/",
  }),
});
