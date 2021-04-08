<template>
  <div class="bg-indigo-500 h-full w-full">
    <StatusTile />
    {{uid}}
  </div>
</template>

<script>

// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';
import StatusTile from './StatusTile.vue';

export default {
  name: 'Feed',
  props: {
    uid: String,
  },
  data() {
    return {
      friendData: {},
    };
  },
  components: {
    StatusTile,
  },
};
</script>

<style>

</style>
