<template>
  <div class="w-3/5 pt-16 mx-auto">
    <div class="p-4 w-1/3 mx-auto border-2 border-purple-600 shadow-lg">
      <h1 class="text-center text-3xl">Welcome to SwineStatus</h1>
      <div class="w-4/5 mx-auto mt-4 flex flex-row justify-around">
        <router-link to="/login" class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</router-link>
        <router-link to="/register" class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style>

</style>
