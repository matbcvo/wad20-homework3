<template>
    <section>
    <section class="profiles-container"  >
      <div class="profile" v-for="profile in this.profiles" :key="profile.id">
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

import axios from 'axios';

export default {
  name:'browse',
  data:function (){
    return {
      profiles:[],
      selected:[],
    }

  },
  mounted(){
    this.getProfiles()
    this.$store.dispatch('getProfiles')
  },
  methods:{
    getProfiles:function (){
      axios.get("https://private-anon-7f767dfdee-wad20postit.apiary-mock.com/profiles")
      .then(response => {this.loadProfiles(response.data)})
    },
    loadProfiles:function (data){
      for (let profile of data) {
        this.profiles.push(profile)
        this.$set(this.selected,profile.id, false)
      }
    },
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
  padding: 20px;
}
.profile .profile-author p {
  text-align: center;
  padding: 10px;
}



.follow {
  background-color: #01579b;
  height: 25px;
  line-height: 10px;
  text-align: center;
  border: none;
  margin-left:40%;
  margin-bottom: 5%;
}

.followed {
  background-color: #8a8a8a;
  height: 25px;
  line-height: 10px;
  text-align: center;
  border: none;
  margin-left: 38%;
  margin-bottom: 5%;
}


</style>