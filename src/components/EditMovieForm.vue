<template>
  <form @submit.prevent="submitForm">
    <input v-model="editedMovie.Poster" type="text" placeholder="Poster img" />
    <input v-model="editedMovie.Title" type="text" placeholder="Title" />
    <input v-model="editedMovie.Year" type="text" placeholder="Year" />
    <input v-model="editedMovie.Genre" type="text" placeholder="Genre" />
    <input v-model="editedMovie.Director" type="text" placeholder="Director" />
    <input v-model="editedMovie.Plot" type="text" placeholder="Plot" />
    <input v-model="editedMovie.Actors" type="text" placeholder="Actors" />
    <input v-model="editedMovie.Language" type="text" placeholder="Language" />
    <input v-model="editedMovie.Country" type="text" placeholder="Country" />
    <input v-model="editedMovie.Rated" type="text" placeholder="Rated" />
    <input v-model="editedMovie.Runtime" type="text" placeholder="Runtime" />
    <input v-model="editedMovie.Writer" type="text" placeholder="Writer" />
    <input
      v-model="editedMovie.imdbRating"
      type="text"
      placeholder="IMDb Rating"
    />
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
              imdbID: this.editedMovie.imdbID,
              Poster: this.editedMovie.Poster,
              Title: this.editedMovie.Title,
              Year: this.editedMovie.Year,
              Genre: this.editedMovie.Genre,
              Director: this.editedMovie.Director,
              Plot: this.editedMovie.Plot,
              Actors: this.editedMovie.Actors,
              Language: this.editedMovie.Language,
              Country: this.editedMovie.Country,
              Rated: this.editedMovie.Rated,
              Runtime: this.editedMovie.Runtime,
              Writer: this.editedMovie.Writer,
              imdbRating: this.editedMovie.imdbRating,
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
