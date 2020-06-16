<template>
  <section class="login">
    <Settings />
    <LoginForm />
  </section>
</template>

<script lang="ts">
import LoginForm from "./LoginForm.vue";
import Settings from "../../components/Settings.vue";

export default {
  name: "Login",
  components: {
    LoginForm,
    Settings,
  },
};
</script>

<style scoped>
.login {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
