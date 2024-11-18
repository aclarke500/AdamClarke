<template>
  <nav>
    <router-link to="/">Home</router-link> |

    <router-link to="/verus">Verus</router-link> | 
    <router-link to="/portfolio">Portfolio</router-link> | 
    <router-link to="/connect">Connect</router-link> 
  </nav>
  <router-view/>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background-color: #2c3e50;
  overflow-x: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #bfc0c2;
  background-color: #11589f;
  min-height: 100vh; /* Full height of the viewport */
  min-width: 100vw; /* Full width of the viewport */
  box-sizing: border-box; /* Ensures padding does not affect the actual box size */
  overflow-x: hidden;
  max-width: 100%;
  margin: 0;
  padding: 0;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #979ea5;
  text-decoration: none; /* Removes underline from links */
}

nav a.router-link-exact-active {
  color: #fff;
}

/* Include font-awesome icons */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css');

</style>
