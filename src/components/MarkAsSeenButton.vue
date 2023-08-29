<template>
  <button class="mark-as-seen-button" @click="toggleSeenStatus">
    {{ buttonText }}
  </button>
</template>

<script>
import { useMoviestore } from "@/store/mstore";

export default {
  props: {
    imdbID: String,
    seen: Boolean,
  },

  computed: {
    buttonText() {
      return this.seen ? "Watched" : "Watch";
    },
  },

  methods: {
    async toggleSeenStatus() {
      try {
        const mstore = useMoviestore();
        const response = await fetch(
          `${mstore.workingUrl + "movies/" + this.imdbID}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ watched: !this.seen }),
          }
        );

        if (response.ok) {
          this.$emit("update:seen", !this.seen);
        } else {
          console.error("Failed to update seen status");
        }
      } catch (error) {
        console.error("Error updating seen status:", error);
      }
    },
  },
};
</script>
