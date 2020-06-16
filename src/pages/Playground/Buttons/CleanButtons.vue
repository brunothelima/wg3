<template>
  <div class="clean-buttons">
    <h6>Clean</h6>
    <ButtonsList skin="clean" size="small" />
    <ButtonsList skin="clean" size="medium" />
    <ButtonsList skin="clean" size="large" />
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
