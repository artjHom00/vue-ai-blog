<template>
  <div class="article">
    <div class="article-img" :style="{
      'background-image': `url(${data.img})`
    }">
    <h1>{{ data.heading }}</h1>
    </div>
    <div class="article-content container">
      <div v-html="data.text"></div>
    </div>

    <div class="article-footer">
      <div>
        <h4>Questions left?</h4>
        <p><iframe width="560" height="315" src="https://www.youtube.com/embed/jtb3kd7MUSI?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>
      </div>
      <div>
        <h4 style="text-align:right;">You'd also like:</h4>
        <div>
          <SmallBlogItem v-for="article in relatedArticles" v-bind:key="article.id" v-bind:data="article"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import SmallBlogItem from '@/components/SmallBlogItem.vue'

    export default {
        name: 'ArticleView',
        components: { SmallBlogItem },
        data() {
          return {
            data: {
              id: 0,
              img: 'https://m.media-amazon.com/images/M/MV5BMTgyMDA2MjY0M15BMl5BanBnXkFtZTgwMTE3NTkyNDM@._V1_.jpg',
              heading: '5 Tips for Optimizing Your Node.js App Performance',
              text: `
<h1>5 Tips for Optimizing Your Node.js App Performance</h1> 
Node.js is an open-source, cross-platform JavaScript run-time environment for executing server-side JavaScript code. It is used by many developers to create high-performance web applications. However, if you want to get the most out of your Node.js app, you will need to optimize its performance. Here are five tips to help you do that.

<h2>1. Use the Latest Version of Node.js</h2>

The Node.js team releases new versions periodically, and each new version contains performance improvements and bug fixes. To get the most out of your Node.js app, make sure you are using the latest version. You can check the version you are using with the following code:

<pre><code>const nodeVersion = process.version;
console.log(nodeVersion);</code></pre>

<h2>2. Enable Garbage Collection</h2>

Garbage collection is a process that allows Node.js to reclaim memory that is no longer in use. This helps improve performance by reducing the amount of memory the application needs to use. To enable garbage collection, you can use the following code:

<pre><code>const gc = require('gc');
gc.start();</code></pre>

<h2>3. Use a Caching Tool</h2>

Caching is a process that stores data in memory so that it can be quickly accessed without having to query a database. This can help improve performance by reducing response times and reducing the load on the server. Node.js has a number of caching tools available, such as Redis or Memcached.

<h2>4. Use a Profiler</h2>

A profiler is a tool that allows you to monitor the performance of your Node.js app. This can help you identify any areas of your code that may be causing performance issues. Node.js has a number of profilers available, such as Node Inspector and Node-V8-Profiler.

<h2>5. Use a Database Tuner</h2>

If you are using a database in your Node.js app, you should consider using a database tuner to optimize its performance. Database tuners allow you to make changes to the database configuration to improve performance. For example, you can configure the database to use indexes, or to cache certain query results.

<h2>Conclusion</h2>

Optimizing your Node.js app's performance is essential for delivering a high-quality experience to your users. By following the tips outlined above, you can ensure that your app is running as efficiently as possible.`,
              date: Date.now()
            },
            relatedArticles: [{
              id: 3,
              heading: '5 Tips for Optimizing Your Node.js App Performance',
              img: 'https://i.ebayimg.com/images/g/IdIAAOSw~~5hZiVw/s-l1600.jpg'
            },
            {
              id: 4,
              heading: '5 Tips for Optimizing Your Node.js App Performance',
              img: 'https://i.ebayimg.com/images/g/IdIAAOSw~~5hZiVw/s-l1600.jpg'
            }
          ]
          }
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