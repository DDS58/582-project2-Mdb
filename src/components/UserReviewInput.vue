<template>
  <div>
    <textarea
      v-model="reviewText"
      rows="5"
      placeholder="Write your review here..."
    ></textarea>
    <button @click="submitReview">Submit Review</button>
  </div>
</template>

<script>
import { useUserStore } from "@/store/userstore";

export default {
  data() {
    return {
      reviewText: "",
    };
  },
  methods: {
    submitReview() {
      const userStore = useUserStore();
      const currentUserRole = userStore.role;

      const review = {
        user: currentUserRole,
        text: this.reviewText,
      };

      this.$emit("review-submitted", review);
      this.reviewText = "";
    },
  },
};
</script>
