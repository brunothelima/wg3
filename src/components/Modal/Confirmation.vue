<template>
  <div class="modal:confirmation">
    <header v-if="header">
      <span @click="$emit('cancel')">
        <i class="icon-arrow-left" />
        <span>{{ header }}</span>
      </span>
    </header>
    <main>
      <i :class="['big', icon]" color="a" v-if="icon" />
      <p v-if="title">{{ title }}</p>
      <span v-if="text">{{ text }}</span>
    </main>
    <footer>
      <button v-if="buttonLeft" @click="$emit('buttonLeftClick')">
        {{ buttonLeft }}
      </button>
      <button v-if="buttonRight" @click="$emit('buttonRightClick')">
        {{ buttonRight }}
      </button>
    </footer>
  </div>
</template>

<script lang="ts">
import { onMounted, onUnmounted } from "vue";

export default {
  props: [
    "status",
    "header",
    "icon",
    "title",
    "text",
    "buttonLeft",
    "buttonRight",
  ],
  setup(props, context) {
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") context.emit("cancel", event);
    };

    onMounted(() => {
      window.addEventListener("keyup", onEsc);
    });

    onUnmounted(() => {
      window.removeEventListener("keyup", onEsc);
    });

    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/vars";

.modal\:confirmation {
  display: flex;
  flex-flow: column;
  overflow: hidden;
  width: 100%;
  max-width: 512px;
  background-color: var(--color-x-11);
  border-radius: var(--card-border-radius);
  border: var(--card-border-width) var(--card-border-style) var(--color-x-8);
  @media screen and (max-width: #{$tablet-brakepoint}) {
    height: 100%;
  }
}

main {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 1em 3em;
  min-height: 230px;
  text-align: center;
  @media screen and (max-width: #{$tablet-brakepoint}) {
    flex: 1;
  }
}
main p {
  margin-bottom: 0.5em;
  font-size: var(--font-size-xxl);
  font-weight: 700;
}
main span {
  color: var(--color-x-6);
  font-size: var(--font-size);
  line-height: 180%;
}
main i {
  margin-bottom: 1rem;
  font-size: 40px;
}

header {
  display: flex;
  padding: 1.5em;
  align-items: center;
  background-color: var(--color-x-10);
  color: var(--color-x-6);
}
header span {
  display: flex;
  align-items: center;
  cursor: pointer;
}
header i {
  margin-right: 0.5em;
}

footer {
  display: flex;
  border-top: var(--card-border-width) var(--card-border-style) var(--color-x-8);
}
footer button {
  flex: 1;
  padding: 1.313em;
  background-color: transparent;
  border: none;
  color: var(--color-x-6);
  font-size: var(--font-size-xl);
  outline: none;
  cursor: pointer;
}
footer button:hover {
  background-color: var(--color-x-10);
}
footer button + button {
  color: var(--color-error);
  border-left: var(--card-border-width) var(--card-border-style)
    var(--color-x-8);
}
footer button[style*="color:"] {
  font-weight: 700;
}
</style>
