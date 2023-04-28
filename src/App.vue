<template>
  <div id="app">
    <div class="nav-conteiner">
      <div class="nav">
        <p class="text">CHOLIKE</p>
        <button class="button text">
          <router-link to="/Home">Home</router-link>
        </button>
        <button class="button text">
          <router-link to="/">Sigh in</router-link>
        </button>
        <button class="button text">
          <router-link to="/about">Sigh un</router-link>
        </button>
      </div>
      
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script></script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #330031;
}

.text {
  margin: 40px;
  text-decoration: none;
  color: beige;
}

.nav {
  display: flex;
  justify-content: center;
  background-color: #330031;
  position: fixed;
  width: 100%;
  min-width: 1400px;
}
</style>
