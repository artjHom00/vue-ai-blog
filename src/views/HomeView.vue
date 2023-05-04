<template>
  <div class="home">
    <BlogItem v-for="blog in blogs" v-bind:key="blog.id" v-bind:blog="blog"/>
  </div>
</template>

<script>
// @ is an alias to /src
import BlogItem from '@/components/BlogItem.vue'

export default {
  name: 'HomeView',
  components: {
    BlogItem
  },
  data() {
    return {
      blogs: [{
        id: 0,
        img: 'https://i.pinimg.com/originals/0d/94/e9/0d94e97b264f27373a0dcb5a4347ab33.jpg',
        heading: 'Example Node.js Article',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
        date: Date.now()
      },
      {
        id: 1,
        img: 'https://www.jambase.com/wp-content/uploads/2023/01/joey-bada.png',
        heading: 'Example Second Node.js Article',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
        date: Date.now()
      }]
    }
  }

}
</script>

<style lang="scss">
    .home {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>
  
