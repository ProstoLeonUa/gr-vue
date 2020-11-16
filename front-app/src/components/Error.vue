<template>
  <v-snackbar value="true" :timeout="timeout" top>
    {{ errorMessage }}</v-snackbar
  >
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Error",
  data() {
    return {
      timeout: 4000,
    };
  },
  computed: {
    ...mapGetters(["errorMessage"]),
  },
};
</script>