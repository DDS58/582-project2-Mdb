<template>
  <nav>
    <UserAdmin @setUserRole="setUserRole" />
    | <router-link to="/">Home</router-link> |
    <router-link v-if="role === 'admin'" to="/add-movie"
      >Add Movie |</router-link
    >
  </nav>
  <router-view />
</template>

<script>
import UserAdmin from "@/components/UserAdmin.vue";
import { useUserStore } from "@/store/userstore";

export default {
  name: "App",
  components: {
    UserAdmin,
  },
  computed: {
    role() {
      return useUserStore().role;
    },
  },
  methods: {
    setUserRole(role) {
      const userStore = useUserStore();
      userStore.setUserRole(role);
    },
  },
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

.search-bar {
  margin-bottom: 20px;
  text-align: center;
}

input {
  padding: 8px;
  width: 300px;
}

.movie-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  :hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
  }
}

.movie-card {
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 200px;
  max-width: 200px;
  text-align: center;
  :hover {
    transform: scale(1);
  }
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

.movie-detail {
  display: flex;
  margin: 20px;
  .movie-poster {
    height: auto;
    width: auto;
    max-height: 500px;
  }
  .movie-title {
    font-size: 20px;
    margin-bottom: 5px;
  }
}
.movie-detail-left {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.movie-detail-right {
  flex: 2;
  padding: 20px;
  font-size: 14px;
  margin: 5px 0;
  text-align: left;
}

.usersInput button {
  padding: 8px 16px;
  font-size: 14px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.usersInput textarea {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid black;
  border-radius: 4px;
  resize: none;
  margin-top: 4px;
}
</style>
