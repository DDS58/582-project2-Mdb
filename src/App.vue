<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/movies/">Movies</router-link> |
    <router-link to="/movies/1">title1</router-link> |
    <router-link to="/movies/2">title2</router-link> |
  </nav>
  <div v-for="x in [1, 2, 3, 4, 5, 6, 7, 8]" :key="x">
    <router-link :to="'/movies/' + x">movies {{ x }}</router-link>
  </div>
  <router-view />
</template>

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
</style>
