<template>
  <figure ref="figure">
    <picture>
      <img data-test="image" :src="path" ref="image" @load="onload($event)" />
    </picture>
    <figcaption>
      <slot />
    </figcaption>
  </figure>
</template>

<script lang="ts">
import { defineComponent, computed, ref, Ref } from 'vue'
import { ImageProps } from '/@src/types/index'

export default defineComponent({
  setup(props: ImageProps) {
    const image: Ref<HTMLImageElement> = ref(null)

    const path = computed(() => {
      const url = new URL(`${import.meta.env.VITE_API_URL}/image`)
      for (const prop in props) {
        url.searchParams.append(prop, props[prop] || '')
      }
      return url
    })
    
    const onload = () => {
      image.value.style.maxWidth = 
        `${image.value.naturalWidth}px`
    }

    return {
      image,
      path,
      onload,
    }
  }
})
</script>

<style scoped>
figure {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: var(--img-border-radius);
  background-color: var(--color-x-9);
  align-items: center;
  justify-content: center;
}
img {
  display: block;
  object-fit: contain;
}
figcaption {
  padding: 1em;
  align-self: flex-start;
}
</style>
