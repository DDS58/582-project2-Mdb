<template>
  <form @submit.prevent="submitForm" class="movie-detail">
    <div class="movie-detail-left">
      <input v-model="movieData.imdbID" type="text" placeholder="imdbID" />
      <input v-model="movieData.Poster" type="text" placeholder="Poster img" />
    </div>
    <div class="movie-detail-right">
      <input v-model="movieData.Title" type="text" placeholder="Title" />
      <input v-model="movieData.Year" type="text" placeholder="Year" />
      <input v-model="movieData.Genre" type="text" placeholder="Genre" />
      <input v-model="movieData.Director" type="text" placeholder="Director" />
      <input v-model="movieData.Plot" type="text" placeholder="Plot" />
      <input v-model="movieData.Actors" type="text" placeholder="Actors" />
      <input v-model="movieData.Language" type="text" placeholder="Language" />
      <input v-model="movieData.Country" type="text" placeholder="Country" />
      <input v-model="movieData.Rated" type="text" placeholder="Rated" />
      <input v-model="movieData.Runtime" type="text" placeholder="Runtime" />
      <input v-model="movieData.Writer" type="text" placeholder="Writer" />
      <input
        v-model="movieData.imdbRating"
        type="text"
        placeholder="IMDb Rating"
      />
      <button type="submit">Add Movie</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      movieData: {
        imdbID: "",
        Title: "",
        Year: "",
        Genre: "",
        Director: "",
        Plot: "",
        Actors: "",
        Language: "",
        Country: "",
        Rated: "",
        Runtime: "",
        Writer: "",
        imdbRating: "",
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
            Title: "",
            Year: "",
            Genre: "",
            Director: "",
            Plot: "",
            Actors: "",
            Language: "",
            Country: "",
            Rated: "",
            Runtime: "",
            Writer: "",
            imdbRating: "",
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
