<template>
  <link rel="stylesheet" href="./styles.css" />
  <div id="App">
    <div class="wrapper">
      <div class="nav-container text-3">
        <input
          type="text"
          v-model="query"
          @input="searchMovies"
          placeholder="title"
        />
        <button class="button button-del" @click="clear">clear</button>
      </div>

      <div class="results">
        <div
          v-for="movie in movies"
          :key="movie.imdbID"
          class="searching-results"
        >
          <img :src="movie.Poster" alt="Movie poster" class="movie-search" />
          <div class="info">
            <h2>{{ movie.Title }}</h2>
            <p>{{ movie.Year }}</p>
            <button @click="saveMovie(movie)">add</button>
          </div>
        </div>
      </div>
      <div class="social-button-container text-2">
        <p>Подпишись на наши сообщества и оставайся с нами на связи:</p>
        <a href="https://web.telegram.org/k/" class="social-button">Telegram</a>
        <a href="https://www.facebook.com/" class="social-button">Facebook</a>
      </div>
      <div class="video-container">
        <div v-for="movie in savedMovies" :key="movie.imdbID">
          <img :src="movie.Poster" alt="Movie poster" />
          <div>{{ movie.Title }} {{ movie.Year }}</div>
          <button @click="removeMovie(movie)" class="button button-del">clear</button>
        </div>
      </div>
      <div class="comments-container">
        <div class="text-2">Комментарии</div>
        <textarea
          class="comments"
          name="comments"
          id=""
          cols="10"
          rows="10"
          placeholder="There are no comments yet, you can leave the first one!"
        ></textarea>
        <button class="comments-button button button-del">comment </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      query: "",
      movies: [],
      savedMovies: [],
      color: "",
    };
  },
  methods: {
    async searchMovies() {
      if (this.query.length > 2) {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=e595600e&s=${this.query}`
        );
        const data = await response.json();
        this.movies = data.Search;
      } else {
        this.movies = [];
      }
    },
    saveMovie(movie) {
      const savedMovies = JSON.parse(localStorage.getItem("movies")) || [];
      savedMovies.push(movie);
      localStorage.setItem("movies", JSON.stringify(savedMovies));
      this.savedMovies = JSON.parse(localStorage.getItem("movies"));
      this.movies = [];
    },

    clear() {
      this.query = "";
      this.movies = "";
    },
    changeColor() {
      this.color = this.color === "#8F1351" ? "#137F8F" : "#8F1351";
    },

    //удаление работает только после обновления страницы???

    removeMovie(movie) {
      const savedMovies = JSON.parse(localStorage.getItem("movies")) || [];
      const index = savedMovies.findIndex((m) => m.imdbID === movie.imdbID);
      if (index !== -1) {
        savedMovies.splice(index, 1);
        localStorage.setItem("movies", JSON.stringify(savedMovies));
      }
    },
  },
  created() {
    if (localStorage.getItem("movies")) {
      try {
        this.savedMovies = JSON.parse(localStorage.getItem("movies"));
      } catch (e) {
        localStorage.removeItem("movies");
      }
    }
  },
  watch: {
    savedMovies(newVal) {
      localStorage.setItem("movies", JSON.stringify(newVal));
    },
  },
};
</script>

<style></style>
