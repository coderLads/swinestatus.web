<template>
<div class="container mx-auto max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-8">
    <h3 class="block text-gray-700 text-lg font-bold mb-4"> Sign Up </h3>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="text"
        placeholder="Email"
        v-model="email"
      />
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        placeholder="******************"
        v-model="password"
      />
    </div>
    <div class="flex items-center justify-between">
      <button
        class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        @click="signUp">
      Sign Up
      </button>
      <router-link
        to="/login"
        class="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800"
        href="#"
      >Login?</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

export default Vue.extend({
  name: 'signup',
  components: {
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    // signs a user up
    signUp() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((user) => {
        if (user.user) {
          firebase.database().ref(`users/${user.user.uid}`).set({
            email: this.email,
          });
        }
        this.$router.replace('home');
      },
      (err) => {
        // eslint-disable-next-line no-alert
        alert(`Oops. ${err.message}`);
      });
    },
  },
});
</script>
