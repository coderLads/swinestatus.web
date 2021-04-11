<template>
  <div class="w-full h-full">
    <button
      class="transition-colors bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline float-right mt-2 mr-2"
      type="button"
      @click="signOut"
    >
      Sign Out
    </button>
    <div class="grid grid-cols-15 h-full">
      <Feed class="col-span-15 md:col-span-10 lg:col-start-4 lg:col-span-6" />
      <Profile class="hidden md:block md:col-span-5 lg:block lg:col-span-3" />
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import Feed from '../components/Feed.vue';
import Profile from '../components/Profile.vue';
import 'firebase/auth';

export default {
  name: 'Home',
  components: {
    Feed,
    Profile,
  },
  methods: {
    signOut() {
      firebase.auth().signOut();
    },
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.$router.replace('login');
      }
    });
  },
};
</script>
