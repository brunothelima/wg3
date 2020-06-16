<i18n>
{
  "pt": {
     "title": "Palheta de cores"
  },
  "en": {
    "title": "Color palette"
  }
}
</i18n>

<template>
  <section class="colors-demo">
    <h1>{{ t("title") }}</h1>
    <hr />
    <div class="css-vars">
      <Primary />
      <Secondary />
      <Grayish />
    </div>
    <System />
    <Gradient />
  </section>
</template>

<script lang="ts">
import { useI18n } from "../../../composables/useI18n";
import Primary from "./Primary.vue";
import Secondary from "./Secondary.vue";
import Grayish from "./Grayish.vue";
import System from "./System.vue";
import Gradient from "./Gradient.vue";

export default {
  components: {
    Primary,
    Secondary,
    Grayish,
    System,
    Gradient,
  },
  setup() {
    return useI18n();
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/vars";

.colors-demo > h1 {
  color: var(--color-a-1);
}
.css-vars {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.143em;
  margin-bottom: 1.143em;
  @media screen and (max-width: #{$mobile-brakepoint}) {
    grid-template-columns: 1fr;
  }
}
.system-colors {
  margin-bottom: 4.571em;
}
</style>
