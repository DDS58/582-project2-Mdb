<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about/">About</router-link> |
    <router-link to="/movies/">Movies</router-link> |
    <router-link to="/movies/1">title1</router-link> |
    <router-link to="/movies/2">title2</router-link> |
  </nav>
  <div v-for="x in [1, 2, 3, 4, 5, 6, 7, 8]" :key="x">
    <router-link :to="'/movies/' + x">movies {{ x }}</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
  data: [
    {
      Title: "Kung Fu Hustle",
      Year: "2004",
      Rated: "R",
      Released: "22 Apr 2005",
      Runtime: "99 min",
      Genre: "Action, Comedy, Fantasy",
      Director: "Stephen Chow",
      Writer: "Stephen Chow, Kan-Cheung Tsang, Xin Huo",
      Actors: "Stephen Chow, Wah Yuen, Qiu Yuen",
      Plot: 'In Shanghai, China in the 1940s, a wannabe gangster aspires to join the notorious "Axe Gang" while residents of a housing complex exhibit extraordinary powers in defending their turf.',
      Language: "Cantonese, Mandarin",
      Country: "Hong Kong, China, United States",
      Awards: "Nominated for 1 BAFTA Award25 wins & 47 nominations total",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjZiOTNlMzYtZWYwZS00YWJjLTk5NDgtODkwNjRhMDI0MjhjXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_SX300.jpg",
      Ratings: [
        { Source: "Internet Movie Database", Value: "7.7/10" },
        { Source: "Rotten Tomatoes", Value: "91%" },
        { Source: "Metacritic", Value: "78/100" },
      ],
      Metascore: "78",
      imdbRating: "7.7",
      imdbVotes: "145,976",
      imdbID: "tt0373074",
      Type: "movie",
      DVD: "16 Apr 2012",
      BoxOffice: "$17,108,591",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
      allComments: [
        {
          id: 1,
          name: "John",
          comment: "This is a comment",
          date: "2021-01-01",
          movieId: 1,
        },
        {
          id: 2,
          name: "Mary",
          comment: "This is another comment",
          date: "2021-01-02",
          movieId: 1,
        },
        {
          id: 3,
          name: "John",
          comment: "This is a comment",
          date: "2021-01-01",
          movieId: 1,
        },
        {
          id: 4,
          name: "Mary",
          comment: "This is another comment",
          date: "2021-01-02",
          movieId: 1,
        },
      ],
    },
    {
      Title: "Shaolin Soccer",
      Year: "2001",
      Rated: "PG",
      Released: "05 Jul 2001",
      Runtime: "87 min",
      Genre: "Action, Comedy, Fantasy",
      Director: "Stephen Chow",
      Writer: "Stephen Chow, Kan-Cheung Tsang, Min-Hun Fung",
      Actors: "Stephen Chow, Wei Zhao, Yat-Fei Wong",
      Plot: "A young Shaolin follower reunites with his discouraged brothers to form a soccer team using their martial art skills to their advantage.",
      Language: "Cantonese, Mandarin",
      Country: "Hong Kong, China",
      Awards: "12 wins & 19 nominations",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjhlMWE5NzktNmE4Ny00ZWFlLTk5MzUtZDZhZmQ0YmVlNDI0XkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_SX300.jpg",
      Ratings: [
        { Source: "Internet Movie Database", Value: "7.3/10" },
        { Source: "Rotten Tomatoes", Value: "89%" },
        { Source: "Metacritic", Value: "68/100" },
      ],
      Metascore: "68",
      imdbRating: "7.3",
      imdbVotes: "84,839",
      imdbID: "tt0286112",
      Type: "movie",
      DVD: "23 May 2016",
      BoxOffice: "$489,600",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
      allComments: [
        {
          id: 1,
          name: "John",
          comment: "This is a comment",
          date: "2021-01-01",
          movieId: 2,
        },
        {
          id: 2,
          name: "Mary",
          comment: "This is another comment",
          date: "2021-01-02",
          movieId: 2,
        },
        {
          id: 3,
          name: "John",
          comment: "This is a comment",
          date: "2021-01-01",
          movieId: 2,
        },
        {
          id: 4,
          name: "Mary",
          comment: "This is another comment",
          date: "2021-01-02",
          movieId: 2,
        },
      ],
    },
  ],
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
</style>
