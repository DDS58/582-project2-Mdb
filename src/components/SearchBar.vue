<template>
  <div class="search-bar">
    <input
      v-model="searchTerm"
      type="text"
      placeholder="Search by title, actors or genre..."
      @input="handleSearch"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    handleSearch() {
      this.$emit("search", this.searchTerm);
    },
  },
};
</script>
