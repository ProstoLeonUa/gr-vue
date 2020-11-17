<template>
  <v-snackbar value="true" :timeout="timeout" top>
    {{ notificationMessage }}</v-snackbar
  >
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Notification",
  data() {
    return {
      timeout: 1000,
    };
  },
  computed: {
    ...mapGetters(["notificationMessage"]),
  },
};
</script>