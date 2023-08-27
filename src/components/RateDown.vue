<template>
  ⭐
  <select v-model="selectedRating" @change="selectRating">
    <option v-for="rating in ratings" :key="rating" :value="rating">
      {{ rating }}
    </option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      ratings: Array.from({ length: 10 }, (_, index) => index + 1),
      selectedRating: 1,
    };
  },
  methods: {
    selectRating() {
      this.$emit("rating-selected", this.selectedRating);
    },
  },
};
</script>
