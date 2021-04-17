<template>
  <div class="bg-red-500 h-full w-full grid grid-rows-profile">
    <SettingsBar :uid='uid'/>
    <StatusForm :uid='uid'/>
    <FutureFeed :uid='uid'/>
  </div>
</template>

<script>

import SettingsBar from './SettingsBar.vue';
import StatusForm from './StatusForm.vue';
import FutureFeed from './FutureFeed.vue';

export default {
  name: 'Profile',
  props: {
    uid: String,
  },
  components: {
    SettingsBar,
    StatusForm,
    FutureFeed,
  },
};
</script>
