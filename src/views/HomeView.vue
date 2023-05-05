<template>
  <div class="home">
    <BlogItem v-for="blog in blogs" v-bind:key="blog._id" v-bind:blog="blog"/>
  </div>
</template>

<script>
// @ is an alias to /src
import BlogItem from '@/components/BlogItem.vue'
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    BlogItem
  },
  created() {
    this.getLatestArticles()
  },
  data() {
    return {
      blogs: []
    }
  },
  methods: {
    async getLatestArticles() {
      const { data: { data: blogs }  } = await axios.get('http://localhost/api/get-articles')
      this.blogs = blogs
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
  
