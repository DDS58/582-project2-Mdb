<template>
  <div v-if="fetchedMovie" class="movie-detail">
    <div class="movie-detail-left">
      <img
        :src="fetchedMovie.Poster"
        :alt="fetchedMovie.Title"
        class="movie-poster"
      />
    </div>
    <div class="movie-detail-right">
      <h2 class="movie-title">{{ fetchedMovie.Title }}</h2>
      <p><strong>Year:</strong> {{ fetchedMovie.Year }}</p>
      <p><strong>Genre:</strong> {{ fetchedMovie.Genre }}</p>
      <p><strong>Director:</strong> {{ fetchedMovie.Director }}</p>
      <p><strong>Plot:</strong> {{ fetchedMovie.Plot }}</p>
      <p><strong>Actors:</strong> {{ fetchedMovie.Actors }}</p>
      <p><strong>Language:</strong> {{ fetchedMovie.Language }}</p>
      <p><strong>Country:</strong> {{ fetchedMovie.Country }}</p>
      <p><strong>Rated:</strong> {{ fetchedMovie.Rated }}</p>
      <p><strong>Runtime:</strong> {{ fetchedMovie.Runtime }}</p>
      <p><strong>Writer:</strong> {{ fetchedMovie.Writer }}</p>
      <p><strong>imdbRating:</strong> {{ fetchedMovie.imdbRating }}</p>
    </div>
    <!-- <p><strong>allComments:</strong> {{ fetchedMovie.allComments }}</p> -->
  </div>
  <div v-else>Loading movie data...</div>
</template>

<script>
export default {
  props: {
    imdbID: String,
  },
  data() {
    return {
      fetchedMovie: null,
    };
  },
  created() {
    console.log("Received id param", this.imdbID);
    this.fetchMovieData();
  },
  methods: {
    async fetchMovieData() {
      try {
        const response = await fetch(
          `http://localhost:3000/movies/${this.imdbID}`
        );
        const movieData = await response.json();
        this.fetchedMovie = movieData;
      } catch (error) {
        console.error("Error fetching movie data:", error);
        this.fetchedMovie = null;
      }
    },
  },
};
</script>
