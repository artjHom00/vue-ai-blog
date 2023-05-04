<template>
  <div class="about">
    <h5>This is an about page, ID: {{ $route.params.id }}</h5>
    <h1>{{ data.heading }}</h1>
    <p>{{ data.text }}</p>
  </div>
</template>

<script>
    export default {
        name: 'ArticleView',
        data() {
          return {
            data: {
              id: 0,
              img: 'https://i.pinimg.com/originals/0d/94/e9/0d94e97b264f27373a0dcb5a4347ab33.jpg',
              heading: 'Example Node.js Article',
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
              date: Date.now()
            }
          }
        }
    }
</script>
