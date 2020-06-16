<i18n>
{
  "pt": {
    "title": "Cores Primárias"
  },
  "en": {
    "title": "Primary colors"
  }
}
</i18n>

<template>
  <div class="primary-colors">
    <h6>{{ t("title") }}</h6>
    <Palette class="primary" :range="7" cssVar="--color-a" />
  </div>
</template>

<script lang="ts">
import { useI18n } from "../../../composables/useI18n";
import Palette from "./Palette.vue";

export default {
  components: {
    Palette,
  },
  setup() {
    return useI18n();
  },
};
</script>

<style lang="scss" scoped>
.primary-colors::v-deep(li:nth-child(1n + 4)) {
  color: var(--color-x-1);
}
</style>
