<template>
<figure>
  <picture>
    <img data-test="image" ref="imageRef" :src="imageSrc" />
  </picture>
  <figcaption><slot /></figcaption>
</figure>
</template>

<script lang="ts" setup>
import { computed, ref, defineProps } from 'vue'

const props = defineProps<{
  w?: number, // Width
  h?: number, // Height
  x?: number, // Focal point x coord
  y?: number, // Focal point y coord
  src: string, // Source path
  ratio?: string, // Size ratios
  smart?: boolean // Use smartcrop
}>()

const imageRef = ref()

/**
 * ImageSrc returns the src path to access the image api url,
 * using the component given props as the url query string params.
 *   
 * If the given props are:
 * 
 * {
 *   w: 200,
 *   h: 100,
 *   src: '/subpath/MyImage.png'
 * } 
 * 
 * We get the following url: 
 * "http://wg3.com/image?w=200&h=100&src=/subpath/MyImage.png" 
 *
*/
const imageSrc = computed(() => {
  const url = new URL(`${import.meta.env.VITE_API_URL}/image`)
  for (const [propName, propValue] of Object.entries(props)) {
    url.searchParams.append(propName, String(propValue))
  } 
  return url
})
</script>

<style lang="scss" scoped>
figure {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: var(--img-border-radius);
  background-color: var(--color-x-9);
  align-items: center;
  justify-content: center;
  img {
    display: block;
    object-fit: contain;
  }
  figcaption {
    padding: 1em;
    align-self: flex-start;
  }
}
</style>