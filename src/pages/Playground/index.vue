<template>
  <div class="playground">
    <Nav />
    <main><router-view /></main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Nav from './Nav.vue'

export default defineComponent({
  components: {
    Nav
  }
})
</script>

<style scoped>
.playground {
  display: flex;
  align-items: flex-start;
}
.playground main {
  flex: 1;
  padding: 2em;
}
.playground main > section {
  max-width: 1024px;
  margin: auto;
}
</style>
