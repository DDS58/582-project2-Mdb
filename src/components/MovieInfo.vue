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
        <UserReviewInput @review-submitted="addReview" />
      </div>
      <div v-if="role === 'admin'" class="admin-mode">
        <button class="edit-button" @click="toggleEditMode">Edit Movie</button>
        <EditMovieForm
          v-if="editingMode"
          :movie="fetchedMovie"
          @movie-updated="handleMovieUpdate"
        />
        <DeleteMovieButton :imdbID="imdbID" :onDelete="handleMovieDeleted" />
      </div>
      <div class="movie-reviews">
        <h3>User Reviews</h3>
        <ul>
          <p v-for="(review, index) in fetchedMovie.reviews" :key="index">
            {{ review.rating }}⭐ <strong>{{ review.user }}:</strong>
            {{ review.text }}
          </p>
        </ul>
      </div>
    </div>
  </div>
  <div v-else>Loading movie data...</div>
</template>

<script>
import { useMoviestore } from "@/store/mstore";
import MarkAsSeenButton from "@/components/MarkAsSeenButton.vue";
import UserReviewInput from "@/components/UserReviewInput.vue";
import DeleteMovieButton from "@/components/DeleteMovieButton.vue";
import EditMovieForm from "@/components/EditMovieForm.vue";
import { useUserStore } from "@/store/userstore";

export default {
  components: {
    MarkAsSeenButton,
    UserReviewInput,
    DeleteMovieButton,
    EditMovieForm,
  },
  props: {
    imdbID: String,
  },
  data() {
    return {
      fetchedMovie: {
        watched: false,
        reviews: [],
      },
      editingMode: false,
    };
  },
  created() {
    console.log("Received id param", this.imdbID);
    this.fetchMovieData();
  },
  methods: {
    async fetchMovieData() {
      try {
        const mstore = useMoviestore();
        const response = await fetch(
          `${mstore.workingUrl + "movies/" + this.imdbID}`
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
    // updateUserRating(newRating) {
    //   this.fetchedMovie.userRating = newRating;
    // },
    // submitUserReview(review) {
    //   this.fetchedMovie.userReview = review;
    //   this.postUserReview(review);
    // },
    async addReview(newReview) {
      this.fetchedMovie.reviews.push(newReview);
      const mstore = useMoviestore();
      const imdbID = this.imdbID;

      try {
        await fetch(`${mstore.workingUrl + "movies/" + imdbID}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ reviews: this.fetchedMovie.reviews }),
        });
      } catch (error) {
        console.error("Error updating movie data:", error);
      }
    },

    async handleMovieDeleted() {
      setTimeout(() => {
        this.$router.push({ name: "MovieList" });
      }, 3000);
    },
    toggleEditMode() {
      this.editingMode = !this.editingMode;
    },
    handleMovieUpdate(updatedMovie) {
      this.fetchedMovie = updatedMovie;
      this.editingMode = false;
    },
  },

  computed: {
    role() {
      return useUserStore().role;
    },
  },
};
</script>
