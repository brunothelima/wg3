<template>
  <figure>
    <picture>
      <img 
        data-test="image" 
        ref="imageRef" 
        :src="imageSrc" 
        @load="imageOnload($event)" 
      />
    </picture>
    <figcaption><slot /></figcaption>
  </figure>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'

export default defineComponent({
  props: { 
    w: Number, 
    h: Number, 
    x: Number, 
    y: Number, 
    src: String, 
    ratio: String, 
    smart: Boolean
  },
  setup(props) {
    const imageRef = ref<HTMLImageElement>()

    const imageSrc = computed(() => {
      const src = new URL(`${import.meta.env.VITE_API_URL}/image`)
      for (const [propName, propValue] of Object.entries(props)) {
        src.searchParams.append(propName, `${propValue}`)
      } 
      return src
    })
    
    const imageOnload = () => {
      if (!imageRef.value) return

      imageRef.value.style.maxWidth = 
        `${imageRef.value.naturalWidth}px`
    }

    return {
      imageRef,
      imageSrc,
      imageOnload,
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
