<template>
    <router-link class="blog-router" :to="{ path: `article/${blog.id}`}" >
        <div class="blog">
                <div class="img" :style="{
                'background-image': `url(${blog.img})`}">
                </div>
            <div class="blog-content">
                <h1>{{ blog.heading }}</h1>
                <p>{{ blog.text }}</p>
                <small>{{ formatDate(blog.date) }}</small>
            </div>
        </div>
    </router-link>
</template>

<script>
    import moment from 'moment';

    export default {
        name: 'BlogItem',
        props: ['blog'],
        methods: {
            formatDate(timestamp) {
                return moment(timestamp).format('DD.MM.YYYY')
            }
        }
    }
</script>

<style lang="scss">
    .blog-router {
        width: calc(50% - 44px)
    }
    .blog {
        width: 100%;
        margin: 20px 0;
        -webkit-box-shadow: 0px 0px 45px -30px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 45px -30px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 45px -30px rgba(0,0,0,0.75);
        &-content {
            padding: 20px 30px;
            & > h1 {
                height: 2em;
                line-height: 1em;
            }
            & > p {
                height: 5em;
                line-height: 1em;
            }
            & > * {
                width: 100%;
                overflow: hidden;
            }
        }
        .img {
            height: 200px;
            width: 100%;
            background-size: cover;
            background-position: center center;
        }
    }
    @media(max-width: 860px) {
        .blog-router {
            width: 100%;
        }
    }
</style>
  