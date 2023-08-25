<template>
  <div class="movie-detail-view">
    <router-link to="/" class="back-link">Back to Movie List</router-link>
    <MovieInfo :imdbID="$route.params.id" />
  </div>
</template>

<script>
import MovieInfo from "@/components/MovieInfo.vue";

export default {
  name: "MoviesView",
  components: {
    MovieInfo,
  },
};
</script>
