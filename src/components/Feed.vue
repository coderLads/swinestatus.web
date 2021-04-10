<template>
  <div class="bg-indigo-500 h-full w-full">
    <StatusTile v-for="friend in friendData" :key='friend' :uid='friend'/>
  </div>
</template>

<script>

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import StatusTile from './StatusTile.vue';

export default {
  name: 'Feed',
  props: {
    uid: String,
  },
  data() {
    return {
      friendData: [],
    };
  },
  components: {
    StatusTile,
  },
  mounted() {
    firebase.database().ref(`/users/${this.uid}/friends/`).on('value', (snapshot) => {
      if (snapshot.val()) {
        console.log(snapshot.val());
        this.friendData = Object.keys(snapshot.val());
      }
    });
  },
};
</script>

<style>

</style>
