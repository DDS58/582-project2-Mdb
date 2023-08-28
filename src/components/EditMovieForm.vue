<template>
  <form @submit.prevent="submitForm">
    <input v-model="editedMovie.Title" type="text" placeholder="Title" />
    <input v-model="editedMovie.Year" type="text" placeholder="Year" />

    <button type="submit">Update Movie</button>
  </form>
</template>

<script>
export default {
  props: {
    movie: Object,
  },
  data() {
    return {
      editedMovie: { ...this.movie },
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch(
          `http://localhost:3000/movies/${this.editedMovie.imdbID}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              Title: this.editedMovie.Title,
              Year: this.editedMovie.Year,
            }),
          }
        );

        if (response.ok) {
          console.log("Movie updated successfully");
          this.$emit("movie-updated", this.editedMovie);
        } else {
          console.error("Failed to update movie");
        }
      } catch (error) {
        console.error("Error updating movie:", error);
      }
    },
  },
};
</script>
