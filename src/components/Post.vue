<template>
    <div class="post">
        <div class="post-author">
            <span class="post-author-info">
                <img :src="author.avatar" alt="Post author">
                <small>
                    {{ author.firstname }} {{ author.lastname }}
                </small>
            </span>
            <small>
                {{ createTime }}
            </small>
        </div>

        <div class="post-image">
            <img v-if="media && media.type == 'image'" :src="media.url" alt="" />
            <video v-if="media && media.type == 'video'" :src="media.url" width="100%" controls />
        </div>

        <div class="post-title">
            <h3>
                {{ text | capitalizeFirstLetterOfEachWord }}
            </h3>
        </div>

        <div class="post-actions">
            <button type="button" name="like" class="like-button" v-bind:class="{ liked: likedPost }" @click="likePost">
                {{ likes }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Post',
    props: {    
        author: Object,
        createTime: String,
        text: String,
        media: Object,
        likes: String,
    },
    data: function () {
        return {
            likedPost: false,
        }
    },
    methods: {
        likePost : function() {
            this.likedPost = !this.likedPost;
        }
    },
    filters: {
        capitalizeFirstLetterOfEachWord: function(string) {
            if (!string) return ''
            var splitString = string.toLowerCase().split(' ');
            for (var i = 0; i < splitString.length; i++) {
                splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
            }
            return splitString.join(' ');
        }
    }
}
</script>

<style>
.post {
    width: 80%;
    margin: 15px auto;
    box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
    border-radius: 5px;
}

.post .post-author {
    padding: 10px;
}

.post .post-author::after {
    content: "";
    display: block;
    clear: both;
}

.post .post-author .post-author-info {
    float: left;
    position: relative;
    width: 50%;
}

.post .post-author .post-author-info img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
    margin: 5px;
}

.post .post-author .post-author-info small {
    position: absolute;
    top: 10px;
    left: 40px;
}

.post .post-author .post-author-info + small {
    float: right;
    color: grey;
    padding: 10px;
}

.post .post-image img {
    width: 100%;
    min-height: 150px;
    max-height: 350px;
    object-fit: cover;
    object-position: top center;
}

.post .post-title {
    padding: 10px;
}

.post .post-title h3 {
    display: inline;
}

.post .post-title ~ .post-actions {
    padding: 10px;
}

.like-button {
    background-image: url('../assets/like.png');
    background-size: 15px;
    background-repeat: no-repeat;
    background-position: 5px center;
    background-color: #8a8a8a;
    width: 60px;
    height: 25px;
    padding-left: 23px;
    line-height: 10px;
    text-align: left;
    border: none;
}

.like-button.liked {
    background-color: #01579b;
}
</style>