<template>
  <div data-test="input" :class="['input:editor', { 'input:editor--invalid': errors.length }]">
    <div
      ref="inputRef"
      :name="name"
      :id="`${name}Id`"
    ></div>
  </div>
</template>

<script lang="ts">
import { ref, computed, inject, watch, defineComponent, onMounted, onUnmounted } from 'vue'
import { useI18n } from '@src/composables'
import CK from '@ckeditor/ckeditor5-build-balloon-block'
import '@src/assets/scss/vendors/ckeditor5.css'

export default defineComponent({
  props: {
    name: String,
    value: String,
    placeholder: String,
    errors: Array
  },
  setup(props, context) {
    const inputRef = ref()
    const { t, locale } = inject('i18n', useI18n()) 
    
    let ckInstance: typeof CK;
    const ckOptions = computed(() => ({
      locale: locale.value,
      placeholder: t(props.placeholder)
    }))

    async function ckBuild() {
      ckInstance?.destroy()
      ckInstance = await CK.create(inputRef.value, ckOptions.value)
      ckInstance.model.document.on( 'change:data', (ev: OnInputEvent) => {
        context.emit('update', [ev, props.name, ckInstance?.getData() ])
      });
    }

    watch(() => locale.value, () => ckBuild())

    onMounted(() => ckBuild())
    
    onUnmounted(() => ckInstance.destroy())
    
    return {
      inputRef
    }
  }
})
</script>

<style lang="scss">
  .input\:editor {
    margin-bottom: 2em;
  }
</style>
