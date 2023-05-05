<template>
  <div class="article">
    <div class="article-img" :style="{
      'background-image': `url(${article.image})`
    }">
    <h1>{{ article.heading }}</h1>
    </div>
    <div class="article-content container">
      <div v-html="article.text"></div>
    </div>

    <div class="article-footer">
      <div v-if="article.video" :class="{half: article.video}">
        <h4>Questions left?</h4>
        <p><iframe width="560" height="315" :src="`https://www.youtube.com/embed/${article.video}?controls=0`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>
      </div>
      <div :class="{half: article.video}">
        <h4 style="text-align:right;">You'd also like:</h4>
        <div>
          <SmallBlogItem v-for="article in relatedArticles" :key="article.id" :data="article"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import SmallBlogItem from '@/components/SmallBlogItem.vue'
    import axios from 'axios'

    export default {
        name: 'ArticleView',
        components: { SmallBlogItem },
        data() {
          return {
            article: {},
            relatedArticles: []
          }
        },
        methods: {
          async fetchArticleData(id) {
            const { data: { data: blogs } } = await axios.get('http://localhost/api/get-article/' + id)
            console.log("🚀 ~ file: ArticleView.vue:43 ~ fetchArticleData ~ blogs:", blogs)

            this.article = blogs
            
          },
          async fetchRelatedArticles() {
            const { data: { data: blogs } } = await axios.get('http://localhost/api/get-related')

            this.relatedArticles = blogs
          },
          async scrollToTop() {
            window.scrollTo(0,0);
          }
        },
        
        created() {
          this.fetchArticleData(this.$route.params.id)
          this.fetchRelatedArticles()
        },

        beforeRouteUpdate(to, from, next) {
          this.fetchArticleData(to.params.id)
          this.fetchRelatedArticles()
          this.scrollToTop()

          next()

        }
    }
</script>

<style lang="scss">
  .article {
    &-footer {
      margin-top: 100px;
      display: flex;
      justify-content: space-between;
      & > div {
        width: 50%;
        margin: 0 auto;
      }
      & > div.half {
        width: 45%;
      }
    }
    &-content {
      margin-top: 50px;
    }
    &-img {
      height: 500px;
      width: 100%;
      position: relative;
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      h1 {
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: 0;
        width: 30%;
        font-size: 48px;
        transform: translate(-50%, -50%);
        color: white;
      }
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #2828286d;
      }
    }
  }
  @media(max-width: 1100px) {
    .article-footer {
      display: block;
    }
  }
</style>