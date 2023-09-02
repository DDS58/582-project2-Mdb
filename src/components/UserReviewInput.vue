<template>
  <div>
    <textarea
      v-model="reviewText"
      rows="5"
      placeholder="Write your review here... and select a rating"
    ></textarea>
    <RateDown @rating-selected="setSelectedRating" />
    <button @click="submitReview">Submit Review</button>
  </div>
</template>

<script>
import { useUserStore } from "@/store/userstore";
import RateDown from "@/components/RateDown.vue";

export default {
  components: {
    RateDown,
  },
  data() {
    return {
      reviewText: "",
      selectedRating: "10",
    };
  },
  methods: {
    setSelectedRating(rating) {
      this.selectedRating = rating;
    },
    submitReview() {
      const userStore = useUserStore();
      const currentUserRole = userStore.role;

      const review = {
        user: currentUserRole,
        text: this.reviewText,
        rating: this.selectedRating,
      };

      this.$emit("review-submitted", review);
      this.reviewText = "";
      this.selectedRating = "10";
    },
  },
};
</script>
