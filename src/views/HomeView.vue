<template>
  <div class="movie-list">
    <MovieCard
      v-for="movie in movies"
      :key="movie.imdbID"
      :title="movie.Title"
      :poster-url="movie.Poster"
      :imdbID="movie.imdbID"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import MovieCard from "@/components/MovieCard.vue";

export default {
  name: "HomeView",
  components: {
    MovieCard,
  },
  data() {
    return {
      movies: [],
    };
  },
  created() {
    this.fetchMovies();
  },
  methods: {
    async fetchMovies() {
      try {
        const response = await fetch("http://localhost:3000/");
        const data = await response.json();
        this.movies = data;
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    },
  },
  // will have to limit number of movies to 20? then add page
};
</script>
