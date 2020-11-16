<template>
  <div class="login-wrapper">
    <h1>Sign in</h1>
    <div class="login-modal">
      <form class="login-form">
        <v-text-field
          label="Login"
          v-model="login"
          :rules="[rules.login]"
        ></v-text-field>
        <v-text-field
          label="Password"
          type="password"
          v-model="password"
          :rules="[rules.password]"
        ></v-text-field>
        <v-btn class="login-form__submit" @click="sign_in" :disabled="validate"
          >Sign in</v-btn
        >
      </form>
      <Error v-if="snackbar" />
    </div>
  </div>
</template>

<script>
import Error from "@/components/Error";
export default {
  data() {
    return {
      login: "",
      password: "",
      snackbar: false,
      rules: {
        login: (v) => !v.length == 0 || "Field must not be empty",
        password: (v) => !v.length == 0 || "Field must not be empty",
      },
    };
  },
  name: "Login",
  computed: {
    validate() {
      return this.login.length > 0 && this.password.length ? false : true;
    },
  },
  methods: {
    async sign_in() {
      const user = {
        login: this.login,
        password: this.password,
      };
      try {
        await this.$store.dispatch("post-sing", user);
        this.$router.push("/");
      } catch (e) {
        this.snackbar = true;
      }
    },
  },
  components: {
    Error,
  },
};
</script>

<style lang="sass" scoped>
.login-wrapper
	justify-self: center
	align-self: center
	text-align: center
.login-modal
	display: grid
	width: 770px
	height: 560px
	background: #ffffff
	box-shadow: 0px 2px 10px rgba(30, 30, 30, 0.12)
	border-radius: 3px
.login-form
	justify-self: center
	align-self: center
	width: 370px
	&__submit
		width: 100%
		margin-top: 100px
	.forgot
		display: flex
		justify-content: center
		margin-top: 20px
</style>