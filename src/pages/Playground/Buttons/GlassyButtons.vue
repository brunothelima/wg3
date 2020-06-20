<template>
  <div class="glassy-buttons">
    <h6>Glassy</h6>
    <ButtonsList skin="glassy" size="small" />
    <ButtonsList skin="glassy" size="medium" />
    <ButtonsList skin="glassy" size="large" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonsList from './ButtonsList.vue'

export default defineComponent({
  components: {
    ButtonsList
  }
})
</script>
