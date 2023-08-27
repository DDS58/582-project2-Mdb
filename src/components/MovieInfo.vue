<template>
  <div v-if="fetchedMovie" class="movie-detail">
    <div class="movie-detail-left">
      <img
        :src="fetchedMovie.Poster"
        :alt="fetchedMovie.Title"
        class="movie-poster"
      />
    </div>
    <div class="movie-detail-right">
      <h2 class="movie-title">{{ fetchedMovie.Title }}</h2>
      <p><strong>Year:</strong> {{ fetchedMovie.Year }}</p>
      <p><strong>Genre:</strong> {{ fetchedMovie.Genre }}</p>
      <p><strong>Director:</strong> {{ fetchedMovie.Director }}</p>
      <p><strong>Plot:</strong> {{ fetchedMovie.Plot }}</p>
      <p><strong>Actors:</strong> {{ fetchedMovie.Actors }}</p>
      <p><strong>Language:</strong> {{ fetchedMovie.Language }}</p>
      <p><strong>Country:</strong> {{ fetchedMovie.Country }}</p>
      <p><strong>Rated:</strong> {{ fetchedMovie.Rated }}</p>
      <p><strong>Runtime:</strong> {{ fetchedMovie.Runtime }}</p>
      <p><strong>Writer:</strong> {{ fetchedMovie.Writer }}</p>
      <p><strong>imdbRating:</strong> {{ fetchedMovie.imdbRating }}</p>
      <div class="usersInput">
        <MarkAsSeenButton
          :imdbID="imdbID"
          :seen="fetchedMovie.watched"
          @update:seen="updateSeenStatus"
        />
        <RateDown @rating-selected="updateUserRating" />
        <UserReviewInput @review-submitted="submitUserReview" />
      </div>
    </div>
    <!-- <p><strong>allComments:</strong> {{ fetchedMovie.allComments }}</p> -->
  </div>
  <div v-else>Loading movie data...</div>
</template>

<script>
import MarkAsSeenButton from "@/components/MarkAsSeenButton.vue";
import RateDown from "@/components/RateDown.vue";
import UserReviewInput from "@/components/UserReviewInput.vue";

export default {
  components: {
    MarkAsSeenButton,
    RateDown,
    UserReviewInput,
  },
  props: {
    imdbID: String,
  },
  data() {
    return {
      fetchedMovie: {
        watched: false,
      },
    };
  },
  created() {
    console.log("Received id param", this.imdbID);
    this.fetchMovieData();
  },
  methods: {
    async fetchMovieData() {
      try {
        const response = await fetch(
          `http://localhost:3000/movies/${this.imdbID}`
        );
        const movieData = await response.json();
        this.fetchedMovie = movieData;
      } catch (error) {
        console.error("Error fetching movie data:", error);
        this.fetchedMovie = null;
      }
    },
    updateSeenStatus(newSeenStatus) {
      this.fetchedMovie.watched = newSeenStatus;
    },
    updateUserRating(newRating) {
      this.fetchedMovie.userRating = newRating;
    },
    submitUserReview(review) {
      this.fetchedMovie.userReview = review;
    },
  },
};
</script>
