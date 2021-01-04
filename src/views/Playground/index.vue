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
  overflow: hidden;
  box-sizing: border-box;
  min-height: 100vh;
  overflow: auto;  
}
.playground main > section {
  max-width: 1200px;
  margin: auto;
  padding: 5vh 0;
}
</style>
