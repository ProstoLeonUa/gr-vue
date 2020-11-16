<template>
  <div class="home">
    <h1>WELLCOME PAGE</h1>
    <a :href="href" @click="logout" class="logout">
      <img :src="logoutImg" />Logout</a
    >
  </div>
</template>

<script>
import { icons } from "@/helper/icons.js";
export default {
  name: "Home",
  data() {
    return {
      href: "/",
      logoutImg: icons("logout"),
    };
  },
  methods: {
    logout() {
      localStorage.clear();
    },
  },
};
</script>
<style lang="sass" scoped>
.home
	display: flex
	flex-direction: column
	justify-content: center
	align-items: center
	.logout
		margin-top: 20px
		text-decoration: none
		width: 80px
		display: flex
		justify-content: space-around
		align-items: center
</style>
