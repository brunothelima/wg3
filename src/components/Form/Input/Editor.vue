<template>
  <div data-test="input" :class="['input:editor', { 'input:editor--invalid': errors && errors.length }]">
    <div
      ref="input"
      :name="name"
      :id="`${name}Id`"
    ></div>
  </div>
</template>

<script lang="ts">
import { ref, computed, inject, watch, defineComponent, onMounted, onUnmounted } from 'vue'
import { useI18n } from '@src/composables'
import CK from '@ckeditor/ckeditor5-build-balloon-block'

export default defineComponent({
  props: {
    name: String,
    value: String,
    placeholder: String,
    errors: Array
  },
  setup(props, context) {
    const input = ref()
    const { t, locale } = inject('i18n', useI18n()) 
    const options = computed(() => ({
      locale: locale.value,
      placeholder: t(props.placeholder)
    }))

    let CKInstance: typeof CK;

    async function buildCK() {
      CKInstance?.destroy()
      CKInstance = await CK.create(input.value, options.value)
      CKInstance.model.document.on( 'change:data', (ev: OnInputEvent) => {
        context.emit('update', ev, { 
          name: props.name, 
          value: CKInstance?.getData() 
        })
      });
    }

    watch(() => locale.value, () => buildCK())

    onMounted(() => buildCK())
    
    onUnmounted(() => CKInstance?.destroy())
    
    return {
      input
    }
  }
})
</script>

<style lang="scss">
.input\:editor {
  margin-bottom: 2em;
}
</style>
