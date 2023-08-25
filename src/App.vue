<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about/">About</router-link> |
    <!-- <router-link to="/movies/1">title1</router-link> |
    <router-link to="/movies/2">title2</router-link> | -->
  </nav>
  <!-- <div v-for="x in [1, 2, 3, 4, 5, 6, 7, 8]" :key="x">
    <router-link :to="'/movies/' + x">movies {{ x }}</router-link>
  </div> -->
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.movie-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.movie-card {
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 200px;
  max-width: 200px;
  text-align: center;
}

.movie-title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.movie-poster {
  max-width: 100%;
  height: 260px;
  width: 180px;
  margin: 0 auto;
}
</style>
