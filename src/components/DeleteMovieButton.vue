<template>
  <button class="delete-movie-button" @click="confirmDelete">
    Delete Movie
  </button>
</template>

<script>
import { useMoviestore } from "@/store/mstore";

export default {
  props: {
    imdbID: String,
    onDelete: Function,
  },
  methods: {
    confirmDelete() {
      const confirmMessage = "Are you sure you want to delete this movie?";
      if (confirm(confirmMessage)) {
        this.deleteMovie();
      }
    },
    async deleteMovie() {
      try {
        const mstore = useMoviestore();
        const response = await fetch(
          `${mstore.workingUrl + "movies/" + this.imdbID}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          this.onDelete();
          console.log("Movie deleted successfully");
        } else {
          console.error("Failed to delete movie");
        }
      } catch (error) {
        console.error("Error deleting movie:", error);
      }
    },
  },
};
</script>
