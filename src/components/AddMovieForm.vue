<template>
  <form @submit.prevent="submitForm">
    <input v-model="movieData.imdbID" type="text" placeholder="imdbID" />
    <input v-model="movieData.title" type="text" placeholder="Title" />
    <input v-model="movieData.year" type="text" placeholder="Year" />
    <button type="submit">Add Movie</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      movieData: {
        imdbID: "",
        title: "",
        year: "",
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch("http://localhost:3000/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.movieData),
        });

        if (response.ok) {
          console.log("Movie added successfully");
          this.movieData = {
            imdbID: "",
            title: "",
            year: "",
          };
        } else {
          console.error("Failed to add movie");
        }
      } catch (error) {
        console.error("Error adding movie:", error);
      }
    },
  },
};
</script>
