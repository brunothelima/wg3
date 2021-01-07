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
    const { schema, data, validate } = useForm(props.schema || {})

    const entries = computed(() => Object.entries(schema))

    provide('i18n', useI18n(props.messages))

    /**
     * This function updates the schema with the new input value
     * and calls onInput callback if one is given in the schema
     */
    const onUpdateHandler: FormOnUpdateHandler = (ev, payload) => {
      const input = schema[payload.name]

      input.errors = []
      input.value = payload.value

      // Checking and calling the event calback function
      if (input.events && input.events.onInput) {
        input.events.onInput({ ev, schema })
        context.emit('callback', 'onInput')
      }

      context.emit('input', { ev, payload })
    }

    const onSubmitHandler = async (ev: Event) => {
      ev.preventDefault()

      context.emit('submit', { ev, data: data.value })

      // Awaits for the validation result
      const isValid = await validate()

      if (isValid) {
        // Emiting success event if no error is found
        context.emit('success', { ev, data: data.value })
        return
      }

      context.emit('error', { ev, data: data.value })
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
