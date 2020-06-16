<template>
  <div class="input-checkbox">
    <input
      type="checkbox"
      :name="name"
      :id="`${name}Id:check`"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      @input="$event.target.value = +$event.target.checked"
    />
    <label :for="`${name}Id:check`">{{ t(title) }}</label>
  </div>
</template>

<script lang="ts">
export default {
  props: ["name", "value", "title", "disabled", "readonly", "t"],
};
</script>
