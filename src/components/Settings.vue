<template>
  <div class="settings">
    <InputSelect
      name="theme"
      :value="theme"
      @input="theme = $event.target.value"
      :options="[
        { value: 'light', label: 'Light' },
        { value: 'dark', label: 'Dark' },
      ]"
    />
    <InputSelect
      name="locale"
      :value="locale"
      :options="[
        { value: 'en', label: 'EN' },
        { value: 'pt', label: 'PT' },
      ]"
      @input="locale = $event.target.value"
    />
  </div>
</template>

<script lang="ts">
import { useI18n } from "../composables/useI18n";
import { useTheme } from "../composables/useTheme";
import InputSelect from "./Form/Input/Select.vue";

export default {
  components: {
    InputSelect,
  },
  setup() {
    const { locale } = useI18n();
    const { theme } = useTheme();

    return {
      locale,
      theme,
    };
  },
};
</script>

<style scoped>
.settings {
  display: flex;
  margin-left: -1em;
  margin-bottom: 1em;
}
.input\:select {
  margin-left: 1em;
  margin-bottom: 0;
}
</style>
