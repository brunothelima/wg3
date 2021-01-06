<i18n>
{
  "pt": {
    "title": "Outros tamanhos de texto:"
  },
  "en": {
    "title": "Othe text sizes:"
  }
}
</i18n>

<template>
  <div class="labels">
    <h6>{{ t('title') }}</h6>
    <ul>
      <li class="xxl"><code>--font-size-xxl</code>Larger font size</li>
      <li class="xl"><code>--font-size-xl</code>Slightly large text size</li>
      <li>Default font size</li>
      <li class="xs"><code>--font-size-xs</code>Slightly small text size</li>
      <li class="xxs"><code>--font-size-xxx</code>Smaller text size</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { useI18n } from '@src/composables/useI18n'

export default {
  setup() {
    return useI18n()
  }
}
</script>
<style scoped>
ul {
  list-style: none;
}
ul li {
  margin-bottom: 2rem;
}
ul li > code {
  display: block;
  margin-bottom: 0.5rem;
}
ul li.xxl {
  font-size: var(--font-size-xxl);
}
ul li.xl {
  font-size: var(--font-size-xl);
}
ul li.xs {
  font-size: var(--font-size-xs);
}
ul li.xxs {
  font-size: var(--font-size-xxs);
  font-weight: 600;
  text-transform: uppercase;
}
</style>
