<i18n>
  {
    "pt": {
      "button": "Botão",
      "icon-left": "Icone a esquerda",
      "icon-right": "Icone a direita",
      "hover": "Foco",
      "active": "Ativo",
      "disabled": "Desativado"
    },
    "en": {
      "button": "Button",
      "icon-left": "Icon Left",
      "icon-right": "Icon Right",
      "hover": "Hover",
      "active": "Active",
      "disabled": "Disabled"
    }
  }
</i18n>

<template>
  <div :class="`${size}-buttons-list`">
    <Button :size="size" :skin="skin">{{ t('button') }}</Button>
    <Button :size="size" :skin="skin" icon="icon-form">{{ t('icon-left') }}</Button>
    <Button :size="size" :skin="skin" :reverse="true" icon="icon-form">{{ t('icon-right') }}</Button>
    <Button :size="size" :skin="skin" class="button--hover">{{ t('hover') }}</Button>
    <Button :size="size" :skin="skin" class="button--active">{{ t('active') }}</Button>
    <Button :size="size" :skin="skin" :disabled="true">{{ t('disabled') }}</Button>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, defineProps } from 'vue'
import { useI18n } from '@src/composables'

const Button = defineAsyncComponent(
  () => import('@src/components/Button/index.vue')
)

const props = defineProps<{
  size?: CustomButtonSizes,
  skin?: CustomButtonSkins,
}>()

const { t } = useI18n()
</script>

<style lang="scss" scoped>
[class*="-buttons-list"] {
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
}
</style>
