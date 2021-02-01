<template>
  <div data-test="input" :class="['input:editor', { 'input:editor--invalid': errors?.length }]">
    <div ref="inputRef" :name="name" :id="`${name}Id`"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, inject, watch, onMounted, onUnmounted, defineProps, defineEmit } from 'vue'
import { useI18n } from '@src/composables'

import CK from '@ckeditor/ckeditor5-build-balloon-block'

const props = defineProps<{
  name?: string,
  value?: string,
  placeholder?: string,
  errors?: string[]
}>()

const emit = defineEmit()
const inputRef = ref()
const { t, locale } = inject('i18n', useI18n())

const ckOptions = computed(() => ({
  locale: locale.value,
  placeholder: t(props.placeholder)
}))

let ckInstance: typeof CK;

/**
 * This function destroys the current ckInstance and relaplaces it with a new one. 
 * It also adds a listener to the ckInstance 'change:data' event, and emmits the 
 * @update event everytime the event is triggered
 */
async function ckBuild() {
  ckInstance?.destroy()
  ckInstance = await CK.create(inputRef.value, ckOptions.value)
  ckInstance.model.document.on('change:data', (event: OnInputEvent) => {
    emit('update', [event, props.name, ckInstance?.getData()])
  });
}

onMounted(() => { ckBuild() })

// On locale change we relocalize the CKEditor by rebuilding the instance
watch(() => locale.value, () => { ckBuild() })

onUnmounted(() => { ckInstance.destroy() })
</script>

<style>
.input\:editor {
  margin-bottom: 2em;
  padding-left: 60px;
}
</style>
