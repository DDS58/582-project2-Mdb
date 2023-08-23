<template>
  <div class="movies">
    <h1>This is a Movies page</h1>
  </div>
  <div>
    Title :
    <!-- {{ $route.params.moviesTitle }}  -->
    with ID {{ $route.params.id }}
  </div>
  <div>movie component</div>
  <button @click="next">next title</button>
</template>

<script>
export default {
  name: "MoviesView",

  methods: {
    next() {
      const id = parseInt(this.$route.params.id) + 1;
      this.$router.push({ path: `/movies/${id}` });
    },
  },
};
</script>
