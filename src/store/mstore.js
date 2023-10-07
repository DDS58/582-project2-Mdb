import { defineStore } from "pinia";

export const useMoviestore = defineStore("mstore", {
  state: () => ({
    // to run index.js on codespaces then use this url
    workingUrl: "https://urban-broccoli-r949xwxwwxq3x9qj-3000.app.github.dev/",
    // using at home without codespaces for faster dev
    // workingUrl: "http://localhost:3000/",
  }),
});
