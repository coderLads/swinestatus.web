<template>
  <div class="w-full h-full">
    <div class="grid grid-cols-15 h-full">
      <Feed :uid=uid class="col-span-15 md:col-span-10 lg:col-start-4 lg:col-span-6"/>
      <Profile :uid=uid class="hidden md:block md:col-span-5 lg:block lg:col-span-3"/>
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
  data() {
    return {
      uid: '',
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user.uid);
        this.uid = user.uid;
      } else {
        this.$router.replace('login');
      }
    });
  },
};
</script>
