<template>
  <section class="login">
    <Settings />
    <LoginForm />
  </section>
</template>

<script lang="ts">
import LoginForm from './LoginForm.vue'
import Settings from '/@components/Settings.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Login',
  components: {
    LoginForm,
    Settings
  }
})
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
