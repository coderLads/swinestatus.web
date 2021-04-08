<template>
  <div class="w-full h-full">
    <div class="grid grid-cols-15 h-full">
      <Feed class="col-span-15 md:col-span-10 lg:col-start-4 lg:col-span-6"/>
      <Profile class="hidden md:block md:col-span-5 lg:block lg:col-span-3"/>
    </div>
  </div>
</template>

<script>
import Feed from '../components/Feed.vue';
import Profile from '../components/Profile.vue';

export default {
  name: 'Home',
  components: {
    Feed,
    Profile,
  },
};
</script>
