<i18n>
{
  "pt": {
    "title": "Imagens",
    "landscape": "Paisagem",
    "portrait": "Retrato",
    "square": "Quadro",
    "smart-on": "Crop inteligente ligado",
    "smart-off": "Crop inteligente desligado"
  },
  "en": {
    "title": "Images",
    "landscape": "Landscape",
    "portrait": "Portrait",
    "square": "Square",
    "smart-on": "Smart crop on",
    "smart-off": "Smart crop off"
  }
}
</i18n>

<template>
  <section class="images-demo">
    <h1>{{ t('title') }}</h1>
    <hr />

    <h6>{{ t('smart-off') }}</h6>
    <div>
      <Image src="image1.jpg" :w="182" ratio="9:16">{{ t("portrait") }} 9:16</Image>
      <Image src="image3.jpg" :w="182" ratio="3:4">{{ t("portrait") }} 3:4</Image>
      <Image src="image5.jpg" :w="182" ratio="1:1">{{ t("square") }} 1:1</Image>
      <Image src="image2.jpg" :w="182" ratio="4:3">{{ t("landscape") }} 4:3</Image>
      <Image src="image4.jpg" :w="182" ratio="16:9">{{ t("landscape") }} 16:9</Image>
    </div>
    <h6>{{ t('smart-on') }}</h6>
    <div class="reverse">
      <Image src="image1.jpg" :w="182" ratio="9:16" :smart="true">{{ t("portrait") }} 9:16</Image>
      <Image src="image3.jpg" :w="182" ratio="3:4" :smart="true">{{ t("portrait") }} 3:4</Image>
      <Image src="image5.jpg" :w="182" ratio="1:1" :smart="true">{{ t("square") }} 1:1</Image>
      <Image src="image2.jpg" :w="182" ratio="4:3" :smart="true">{{ t("landscape") }} 4:3</Image>
      <Image src="image4.jpg" :w="182" ratio="16:9" :smart="true">{{ t("landscape") }} 16:9</Image>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { useI18n } from '@src/composables'

const Image = defineAsyncComponent(
  () => import('@src/components/Image.vue')
)

const { t } = useI18n()
</script>

<style scoped>
h1 {
  color: var(--color-a-1);
}
.images-demo::v-deep(figure) {
  margin: 0.5em;
}
.images-demo::v-deep(figure) figcaption {
  align-self: center;
}
.images-demo > div {
  overflow: auto;
  white-space: nowrap;
  margin-bottom: 2em;
}
.images-demo > div figure {
  display: inline-flex;
  flex-direction: column;
}
</style>
