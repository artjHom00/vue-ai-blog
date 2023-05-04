<template>
  <div class="container">
    <nav>
      <div>
        <small>Fully Powered By AI</small>
      </div>
      <div>
        <small>RENÉE</small>
      </div>
    </nav>

    <div class="wrapper">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #161616;
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  a:hover {
    text-decoration: underline;
  }
}

h1,h2,h3,h4,h5,h6 {
  font-family: 'Bebas Neue', sans-serif;
  margin: 0;
}

a {
  margin-right: 20px;
  color: #161616;
  text-decoration: none;
}

.container {
  max-width: 90%;
  margin: 0 auto;
  display: block;
}

p {
  color: #585858;  
}

.wrapper {
  margin-top: 30px;
}

</style>
