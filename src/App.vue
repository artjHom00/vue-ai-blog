<template>
  
    <nav>
      <div class="container">
        <div>
          <small>* Fully Powered By AI</small>
        </div>
        <div>
          <small><router-link to="/">All Articles</router-link></small>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="wrapper">
        <router-view/>
      </div>
    </div>

</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

body {
  margin: 0;
  padding: 0;
  padding-bottom: 30px;
  min-height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #161616;
}

nav {
  padding: 30px 0;
  border-bottom: 1px solid #eaeaea;
  .container {
    display: flex;
    justify-content: space-between;
  }
  a {
    margin-right: 20px;
    &:hover {
      text-decoration: underline;
    }
  }
}

h1,h2,h3,h4,h5,h6 {
  font-family: 'Bebas Neue', sans-serif;
}

a {
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
