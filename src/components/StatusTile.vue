<template>
  <!--                           this one will be the priority    ↓ -->
  <div class="bg-white shadow-lg rounded col-span-8 md:col-span-2 h-28 grid grid-cols-3">
    <div>{{userData.status}}</div>
    <div>{{userData.name}}</div>
  </div>
</template>

<script>
import Status from '../scripts/Status';

export default {
  name: 'StatusTile',
  props: {
    uid: String,
  },
  data() {
    return {
      userData: {},
    };
  },
  watch: {
    uid(newVal) {
      if (newVal) {
        Status(newVal).then((data) => { this.userData = data; });
      }
    },
  },
};
</script>
