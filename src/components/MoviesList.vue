<template>
  <div>
    <SearchBar @search="handleSearch" />
    <div class="movie-list">
      <MovieCard
        v-for="movie in filteredMovies"
        :key="movie.imdbID"
        :title="movie.Title"
        :poster-url="movie.Poster"
        :imdbID="movie.imdbID"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieCard from "@/components/MovieCard.vue";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "HomeView",
  components: {
    MovieCard,
    SearchBar,
  },
  data() {
    return {
      movies: [],
      searchTerm: "",
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
    handleSearch(searchTerm) {
      this.searchTerm = searchTerm;
    },
  },
  computed: {
    filteredMovies() {
      if (!this.searchTerm) {
        return this.movies;
      }
      const lowerSearchTerm = this.searchTerm.toLowerCase();
      return this.movies.filter(
        (movie) =>
          movie.Title.toLowerCase().includes(lowerSearchTerm) ||
          movie.Actors.toLowerCase().includes(lowerSearchTerm) ||
          movie.Genre.toLowerCase().includes(lowerSearchTerm)
      );
    },
  },
  // will have to limit number of movies to 20? then add page
};
</script>
