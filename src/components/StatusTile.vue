<template>
  <div>
      {{uid}}
  </div>
</template>

<script>
import Status from '../scripts/Status';

export default {
  name: 'Profile',
  props: {
    uid: String,
  },
  data() {
    return {
      userData: {},
    };
  },
  mounted() {
    this.userData = Status(this.uid);
  },
};
</script>
