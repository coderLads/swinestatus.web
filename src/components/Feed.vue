<template>
  <div class="bg-indigo-500 h-full w-full grid grid-cols-8 auto-rows-min gap-4 p-4">
    <StatusTile v-for="friend in friendData" :key='friend' :uid='friend'/>
    <StatusTile v-for="friend in friendData" :key='friend' :uid='friend'/>
    <StatusTile v-for="friend in friendData" :key='friend' :uid='friend'/>
    <StatusTile v-for="friend in friendData" :key='friend' :uid='friend'/>
    <StatusTile v-for="friend in friendData" :key='friend' :uid='friend'/>
    <StatusTile v-for="friend in friendData" :key='friend' :uid='friend'/>
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
  data() {
    return {
      uid: '',
      friendData: [],
    };
  },
  components: {
    StatusTile,
  },
  mounted() {
    this.uid = firebase.auth().currentUser.uid;
    const friendListRef = firebase.database().ref(`/users/${this.uid}/friends/`);
    friendListRef.on('value', (snapshot) => {
      if (snapshot.val()) {
        this.friendData = Object.keys(snapshot.val());
      }
    });
  },
};
</script>

<style>

</style>
