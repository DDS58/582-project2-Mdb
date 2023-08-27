<template>
  <div>
    <textarea
      v-model="review"
      rows="5"
      placeholder="Write your review here..."
    ></textarea>
    <button @click="submitReview">Submit Review</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      review: "",
    };
  },
  methods: {
    submitReview() {
      this.$emit("review-submitted", this.review);
      this.review = "";
    },
  },
};
</script>
