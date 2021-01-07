<template>
  <div class="playground">
    <Nav />
    <main>
      <Suspense>
        <template #default><router-view /></template>
        <template #fallback><Loader /></template>
      </Suspense>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Nav from './Nav.vue'
import Loader from '@src/components/Loader.vue'

export default defineComponent({
  components: {
    Nav,
    Loader
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
  position: relative;
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
