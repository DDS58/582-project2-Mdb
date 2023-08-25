<template>
  <div class="movie-card" @click="navigateToDetail">
    <img :src="posterUrl" :alt="title" class="movie-poster" />
    <h3 class="movie-title">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    imdbID: String,
    title: String,
    posterUrl: String,
  },
  methods: {
    async navigateToDetail() {
      try {
        console.log("Clicked movie with imdbID:", this.imdbID);
        await this.$router.push({
          name: "MovieInfo",
          params: { id: this.imdbID },
        });
      } catch (error) {
        console.error("Navigation error:", error);
      }
    },
  },
};
</script>
