<template>
  <component :is="template"> </component>
</template>

<script>
import LoginLayout from "@/layouts/LoginLayout";
import Main from "@/layouts/MainLayout";
export default {
  name: "App",
  components: {
    LoginLayout,
    Main,
  },
  computed: {
    // If url == '/' then template == Main
    // else template == Login
    template() {
      return this.$route.meta.layout;
    },
  },
};
</script>

<style lang="sass">
html
	overflow: hidden
	box-sizing: border-box
	margin: 0
	padding: 0
</style>
