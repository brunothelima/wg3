<template>
  <form data-test="form" @submit="onSubmitHandler" class="form">
    <pre>{{data}}</pre><br><br><br>
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
    const { schema, data, validate } = useForm(props.schema || {})

    const entries = computed(() => Object.entries(schema))

    provide('i18n', useI18n(props.messages))

    /**
     * This function updates the schema with the new input value
     * and calls onInput callback if one is given in the schema
     */
    const onUpdateHandler: FormOnUpdateHandler = () => {
      const [updateEvent, inputName, inputValue] = arguments
      const inputRef = schema[inputName]

      inputRef.errors = []
      inputRef.value = inputValue

      // Checking and calling the event calback function
      if (inputRef.events && inputRef.events.onUpdate) {
        inputRef.events.onUpdate(updateEvent)              
      }
      
      context.emit('update', updateEvent)
    }

    const onSubmitHandler = async (event: Event) => {
      event.preventDefault()

      context.emit('submit', data)

      // Awaits for the validation result
      const isFormValid = await validate()

      if (isFormValid) {
        // Emiting success event if no error is found
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
