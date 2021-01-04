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
    <Button :size="size" :skin="skin" icon="icon-form">
      {{ t('icon-left') }}
    </Button>
    <Button :size="size" :skin="skin" :reverse="true" icon="icon-form">
      {{ t('icon-right') }}
    </Button>
    <Button :size="size" :skin="skin" class="button--hover">
      {{ t('hover') }}
    </Button>
    <Button :size="size" :skin="skin" class="button--active">
      {{ t('active') }}
    </Button>
    <Button :size="size" :skin="skin" :disabled="true">
      {{ t('disabled') }}
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from '/@wg3/composables/useI18n'
import Button from '/@wg3/components/Button/index.vue'

export default defineComponent({
  components: {
    Button
  },
  props: ['size', 'title', 'skin'],
  setup() {
    return useI18n()
  }
})
</script>

<style lang="scss" scoped>
[class*='-buttons-list'] {
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
}
</style>
