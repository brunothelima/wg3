<i18n>
{
  "en": {
    "heading": "Confirmation",
    "dialogButton": "Ask for confirmation",
    "dialog": {
      "header": "Confirmation",
      "title": "Are you sure you want to delete this post?",
      "text": "Deleting this post will remove it from all the pages and widgets. This action can not be undone.",
      "buttonLeft": "Cancel",
      "buttonRight": "Delete"
    }
  },
  "pt": {
    "heading": "Confirmação",
    "dialogButton": "Modal de confirmação",
    "dialog": {
      "header": "Confirmação",
      "title": "Você tem certeza que quer Excluír este post?",
      "text": "Excluír post, resultará na retirada deste conteúdo de todas as paginas e widgets. Esta ação não pode ser disfeita",
      "buttonLeft": "Cancelar",
      "buttonRight": "Excluír"
    }
  }
}
</i18n>

<template>
  <div class="confirmation-demo">
    <h6>{{ t('heading') }}</h6>
    <Button model="glassy" icon="icon-thick-2px" :reverse="true" @click="showDialog = true">{{
      t('dialogButton')
    }}</Button>
    <Confirmation
      icon="icon-trash-bin-small"
      :header="t('dialog.header')"
      :title="t('dialog.title')"
      :text="t('dialog.text')"
      :buttonLeft="t('dialog.buttonLeft')"
      :buttonRight="t('dialog.buttonRight')"
    />
    <Dialog v-if="showDialog">
      <Confirmation
        @cancel="showDialog = false"
        icon="icon-trash-bin-small"
        :header="t('dialog.header')"
        :title="t('dialog.title')"
        :text="t('dialog.text')"
        :buttonLeft="t('dialog.buttonLeft')"
        @leftButtonClick="showDialog = false"
        :buttonRight="t('dialog.buttonRight')"
        @rightButtonClick="showDialog = false"
      />
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue'
import { useI18n } from '@src/composables'

const Button = defineAsyncComponent(
  () => import('@src/components/Button/index.vue')
) 
const Dialog = defineAsyncComponent(
  () => import('@src/components/Dialog/index.vue')
) 
const Confirmation = defineAsyncComponent(
  () => import('@src/components/Dialog/Confirmation.vue')
) 

const { t } = useI18n()

const showDialog = ref(false)
</script>

<style scoped>
h1 {
  color: var(--color-a-1);
}
.button {
  margin-bottom: 2em;
}
</style>
