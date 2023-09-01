<template>
  <div class="header">
    <h1 class="title">Mdb</h1>
    <UserAdmin @setUserRole="setUserRole" />
  </div>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link v-if="role === 'admin'" to="/add-movie">Add Movie</router-link>
  </nav>

  <router-view />
  <div class="footer">
    <p>&copy; 2023 Mdb</p>
  </div>
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
html {
  background-color: #18191aff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
}

.title {
  font-size: 40px;
  color: #00568cff;
}

nav {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: white;
    border: 1px solid white;
    border-radius: 4px;
    padding: 8px 16px;

    :hover {
      text-decoration: underline;
    }

    &.router-link-exact-active {
      background-color: #242526ff;
      color: #00568cff;
      font-weight: bold;
    }
  }
  ul {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    list-style-type: none;
  }
}

.search-bar {
  margin: 20px;
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
  border: 1px solid white;
  background-color: #242526ff;
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

.back-link {
  display: flex;
  color: white;
  border-radius: 4px;
  padding: 8px 16px;
  justify-content: center;
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
  button {
    background: red;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
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
  background-color: #242526ff;
}

.usersInput button {
  padding: 8px 16px;
  font-size: 14px;
  background-color: #00568cff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.usersInput textarea {
  width: 97%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #00568cff;
  border-radius: 4px;
  resize: none;
  margin-top: 4px;
}

.active {
  color: #00568cff;
  background-color: #242526ff;
  font-weight: bold;
  border: 1px solid white;
  border-radius: 4px;
  padding: 8px 16px;
}

.admin-mode {
  button {
    background: red;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
  }
}

@media only screen and (max-width: 768px) {
  .movie-detail {
    display: block;
    input {
      width: 97%;
    }
  }
}
</style>
