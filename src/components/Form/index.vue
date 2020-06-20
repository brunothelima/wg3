<template>
  <form @submit="onSubmitHandler" class="form">
    <div class="form__grid">
      <Field v-for="[name, input] in entries" :key="input.name" :input="input" :id="`${name}Id`" :t="t">
        <component v-bind="input" @input="onInputHandler" :is="`input-${input.type}`" :name="name" :t="t" />
      </Field>
    </div>
    <slot />
  </form>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useForm } from '../../composables/useForm'
import { useI18n } from '../../composables/useI18n'
import { FormProps } from '../../types'

import Field from './Field.vue'
import InputText from './Input/Text.vue'
import InputSelect from './Input/Select.vue'
import InputPassword from './Input/Password.vue'

export default defineComponent({
  props: {
    locale: Object,
    schema: Object
  },
  components: {
    Field,
    InputText,
    InputSelect,
    InputPassword
  },
  setup(props: FormProps, context) {
    const { t } = useI18n(props.locale)

    const { schema, data, validate } = useForm(props.schema)

    const entries = computed(() => Object.entries(schema))

    /**
     * This function updates the schema with the new input value
     * and calls onInput callback if one is given in the schema
     */
    const onInputHandler = (ev: Event) => {
      const { name, value } = ev.target as HTMLInputElement
      const input = schema[name]

      // Updating the schema input value
      input.value = value
      input.errors = []

      // Checking and calling the event calback function
      if (input.events && input.events.onInput) {
        input.events.onInput(ev, schema)
      }
    }

    const onSubmitHandler = async (ev: Event) => {
      ev.preventDefault()

      context.emit('submit', { ev, data: data.value })

      // Awaits for the validation result
      const isValid = await validate()

      if (isValid) {
        // Emiting success event if no error is found
        context.emit('success', { ev, data: data.value })
      }
    }

    return {
      t,
      data,
      entries,
      onInputHandler,
      onSubmitHandler
    }
  }
})
</script>
