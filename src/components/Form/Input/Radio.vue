<template>
  <div class="input-radio">
    <div v-for="(option, index) in options" :key="option">
      <input
        type="radio"
        :id="`${name}Id:${index}`"
        :name="name"
        :value="option.value"
        :disabled="disabled"
        :readonly="readonly"
        :checked="option.value == value"
      />
      <label :for="`${name}Id:${index}`">{{ t(option.label) }}</label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default {
  props: [
    "name",
    "value",
    "options",
    "placeholder",
    "disabled",
    "readonly",
    "t",
  ],
};
</script>
