<template>
  <div class="bg-green-500 w-full p-2">
    <StatusTile :uid='uid'/>
  </div>
</template>

<script>

import firebase from 'firebase/app';
import StatusTile from './StatusTile.vue';
import 'firebase/auth';

export default {
  name: 'StatusForm',
  props: {
  },
  data() {
    return {
      uid: '',
    };
  },
  components: {
    StatusTile,
  },
  mounted() {
    this.uid = firebase.auth().currentUser.uid;
  },
};
</script>
