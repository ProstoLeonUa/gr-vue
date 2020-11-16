<template>
  <v-container fluid class="login">
    <router-view></router-view>
  </v-container>
</template>
<script>
export default {
  name: "LoginLayout",
};
</script>
<style lang="sass" scoped>
.login
	display: grid
	height: 100vh
	background-color: #EDF1F7
</style>