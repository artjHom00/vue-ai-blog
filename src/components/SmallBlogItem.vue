<template>
    <router-link :to="{path: `/article/${data.id}`}">
        <div class="related-blog" :style="{'background-image': `url(${data.img})`}">
            <h3>{{ data.heading }}</h3>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'SmallBlogItem',
    props: ['data']
}
</script>

<style lang="scss">
    .related-blog {
        width: 100%;
        height: 140px;
        margin: 20px 0;
        background-size: cover;
        background-position: center center;
        position: relative;
        & > h3 {
            width: 40%;
            text-align: left;
            margin: 0;
            position: absolute;
            top: 50%;
            left: 30%;
            transform: translate(-50%, -50%);
            color: white;
        }
        &::before {
            position: absolute;
            width: 100%;
            height: 100%;
            content: '';
            background: #28282882;
        }
        &:hover {
            &::before {
                background: #282828b6;
            }
        }
    }
</style>