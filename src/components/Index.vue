<template>
    <section class="main-container">
        <div v-for="post in posts" :key="post.id">
            <Post v-bind:author="post.author" v-bind:createTime="post.createTime" v-bind:text="post.text" v-bind:media="post.media" v-bind:likes="post.likes" />
        </div>
    </section>
</template>

<script>
import Post from '@/components/Post'
export default {
    name: 'Index',
    components: {
        Post,
    },
    computed: {
        posts: function() {
            return this.$store.getters.getPosts;
        },
    },
    mounted() {
        this.$store.dispatch('getPosts');
    },
}
</script>

<style>
.main-container {
    width: 50%;
    min-height: 100%;
    margin: auto auto;
    padding: 90px 15px 15px 15px;
    background-color: #ffffff;
}
</style>