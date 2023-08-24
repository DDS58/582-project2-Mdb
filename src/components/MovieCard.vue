<template>
  <div class="movie-card">
    <img :src="posterUrl" :alt="title" class="movie-poster" />
    <h3 class="movie-title">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    posterUrl: String,
  },
};
</script>
