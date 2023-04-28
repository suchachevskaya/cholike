<template>
  <body>
    <h1>CHOLIKE</h1>
    <p>Sigh up to ChoLike</p>
    <div class="login-bg-container">
      <div class="login-bg">
        <div class="login">
          <p>Sign in</p>
          <p>Username</p>
          <input type="text" name="" id="" />
          <p>Email</p>
          <input type="text" name="" id="" />
          <p>Password</p>
          <input type="password" />
          <p>Confirm assword</p>
          <input type="password" />
          <button class="button">Sign in</button>
        </div>
      </div>
    </div>
  </body>
</template>

<script></script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #330031;
  font-size: 20px;
}
.login-bg-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-bg {
  background-color: #330031;
  color: azure;
  min-height: 500px;
  width: 839px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
}
input {
  height: 30px;
  border-radius: 10px;
}
.button {
  height: 35px;
  min-width: 90px;
  border-radius: 10px;
}
</style>
