<template>
    <section>
    <section class="profiles-container"  >
      <div class="profile" v-for="profile in profiles" :key="profile.id">
        <div class="profile-author">
          <img alt="avatar" :src="profile.avatar">
          <p>{{profile.firstname + " "+ profile.lastname}}</p>
        </div>
        <button :index="profile.id" :class="{'follow':!selected[profile.id], 'followed': selected[profile.id]}" @click="followed(profile.id)">
          <span v-if="!selected[profile.id]">Follow</span>
          <span v-if="selected[profile.id]">Followed</span>
        </button>
      </div>
    </section>
    </section>


</template>

<script>
export default {
  name:'browse',
  data:function (){
    return {
      selected:[],
    }

  },
  mounted(){
    this.$store.dispatch('getProfiles')
  },
  computed: {
    profiles: function() {
        return this.$store.getters.getProfiles;
    },
  },
  methods:{
    followed:function ( id){
      this.$set(this.selected,id, !this.selected[id])
    }
  },
}
</script>

<style>

.profiles-container{
  width: 50%;
  min-height: 900px;
  margin: auto auto;
  padding: 90px 15px 15px 15px;
  background-color: #ffffff;

}
.profile{
  width: 45%;
  margin:15px;
  box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
  border-radius: 5px;
  float:left;
  border: 1px solid lightgray;

}

.profile .profile-author img {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 35px;
  padding: 5px;
}
.profile .profile-author p {
  text-align: center;
}


button{
  padding: 8px 20px;
  border-radius:4px;
  margin-top: 20px;
  text-align: center;
  height: 25px;
  line-height: 10px;
  margin-bottom: 5%;
  border: none;
}
.follow {
  background-color: #01579b;
  margin-left:40%;

}

.followed {
  background-color: #8a8a8a;
  margin-left: 38%;

}


</style>