<i18n>
{
  "en": {
    "heading": "Confirmation",
    "modalButton": "Ask for confirmation",
    "modal": {
      "header": "Confirmation",
      "title": "Are you sure you want to delete this post?",
      "text": "Deleting this post will remove it from all the pages and widgets. This action can not be undone.",
      "buttonLeft": "Cancel",
      "buttonRight": "Delete"
    }
  },
  "pt": {
    "heading": "Confirmação",
    "modalButton": "Modal de confirmação",
    "modal": {
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
    <h6>{{ t("heading") }}</h6>
    <Button
      model="glassy"
      icon="icon-thick-2px"
      :reverse="true"
      @click="showModal = true"
      >{{ t("modalButton") }}</Button
    >
    <Confirmation
      icon="icon-trash-bin-small"
      :header="t('modal.header')"
      :title="t('modal.title')"
      :text="t('modal.text')"
      :buttonLeft="{ label: t('modal.buttonLeft') }"
      :buttonRight="{ label: t('modal.buttonRight') }"
    />
    <Modal v-if="showModal">
      <Confirmation
        @cancel="showModal = false"
        @buttonLeftClick="showModal = false"
        @buttonRightClick="showModal = false"
        icon="icon-trash-bin-small"
        :header="t('modal.header')"
        :title="t('modal.title')"
        :text="t('modal.text')"
        :buttonLeft="{ label: t('modal.buttonLeft') }"
        :buttonRight="{ label: t('modal.buttonRight') }"
      />
    </Modal>
  </div>
</template>

<script lang="ts">
import { useI18n } from "../../../composables/useI18n";
import Modal from "../../../components/Modal/index.vue";
import Button from "../../../components/Button/index.vue";
import Confirmation from "../../../components/Modal/Confirmation.vue";

export default {
  data: () => ({ showModal: false }),
  components: {
    Modal,
    Button,
    Confirmation,
  },
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
};
</script>

<style scoped>
h1 {
  color: var(--color-a-1);
}
.button {
  margin-bottom: 2em;
}
</style>
