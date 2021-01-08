<template>
  <form data-test="form" @submit="onSubmitHandler" class="form">
    <!-- <pre>{{data}}</pre><br><br><br> -->
    <div class="form__grid">
      <Field v-for="[name, input] in entries" :key="name" :input="input" :id="`${name}Id`">
        <component v-bind="input" @update="onUpdateHandler" :is="`input-${input.type}`" :name="name"/>
      </Field>
    </div>
    <slot />
  </form>
</template>

<script lang="ts">
import { computed, provide, defineComponent, defineAsyncComponent, PropType } from 'vue'
import { useForm, useI18n } from '@src/composables/'

import Field from './Field.vue'
import * as InputCollection from './Input'

export default defineComponent({
  props: {
    schema: Object as PropType<FormSchema>,
    messages: Object as PropType<I18nMessages>,
  },
  components: {
    Field,
    ...InputCollection
  },
  setup(props, context) {
    provide('i18n', useI18n(props.messages))
    const { schema, data, validate } = useForm(props.schema || {})
    const entries = computed(() => Object.entries(schema))

    const onUpdateHandler: FormOnUpdateHandler = event => {
      const [_, inputName, inputValue] = event
      const inputRef = schema[inputName]

      inputRef.errors = []
      inputRef.value = inputValue

      if (inputRef.events && inputRef.events.onUpdate) {
        inputRef.events.onUpdate(event)              
      }
      
      context.emit('update', event)
    }

    const onSubmitHandler = async (event: Event) => {
      event.preventDefault()
      const isFormValid = await validate()

      if (isFormValid) {
        context.emit('success', data)
        return
      }

      context.emit('error', data)
    }

    return {
      data,
      entries,
      onUpdateHandler,
      onSubmitHandler
    }
  }
})
</script>
