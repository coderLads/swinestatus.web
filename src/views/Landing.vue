<template>
  <div class="pt-16 mx-auto">
    <div class="m-2 p-4 sm:w-3/5 lg:w-2/5 sm:mx-auto border-2 sm:max-w-lg border-purple-600 shadow-lg bg-white">
      <h1 class="text-center text-3xl">SwineStatus</h1>
      <h2 class="text-center text-lg p-2">{{exampleName}}</h2>
      <button class="rounded text-purple-500 p-2 px-3 text-xl font-bold float-right -mt-11 -mr-4 sm:-mr-2 lg:mr-4 focus:outline-none hover:text-purple-700" @click='getName'>↻</button>
      <div class="w-4/5 mx-auto mt-2 flex flex-row justify-around">
        <router-link to="/login" class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</router-link>
        <router-link
          :to="{
            name: 'Register',
            params: {passedName: exampleName}
          }" class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import SwineName from '../scripts/SwineName';

export default {
  name: 'Landing',
  data() {
    return {
      exampleName: '',
    };
  },
  methods: {
    getName() {
      SwineName().then((name) => { this.exampleName = name; });
    },
  },
  mounted() {
    this.getName();
  },
};
</script>

<style>

</style>
