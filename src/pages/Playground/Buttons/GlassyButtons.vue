<template>
  <div class="glassy-buttons">
    <h6>Glassy</h6>
    <ButtonsList skin="glassy" size="small" />
    <ButtonsList skin="glassy" size="medium" />
    <ButtonsList skin="glassy" size="large" />
  </div>
</template>

<script lang="ts">
import ButtonsList from "./ButtonsList.vue";

export default {
  components: {
    ButtonsList,
  },
};
</script>
