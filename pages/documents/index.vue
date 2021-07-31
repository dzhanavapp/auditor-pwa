<template>
  <div class="container">
    <h2 class="title">Документы</h2>
    <div class="list">
      <template v-if="documents !== null">
        <ul v-if="documents.length" class="list__data">
          <AuditDocument
            v-for="(document, index) of documents"
            :key="index"
            class="mb-8"
            :document="document"
          />
        </ul>
        <div v-else class="list__empty">Нет документов</div>
      </template>

      <div v-else class="list__empty">Загрузка...</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Documents',
  data: () => ({
    documents: null,
  }),
  async created() {
    try {
      const documents = await this.$axios.$get(
        `https://market.21baza.ru/api/mob_auditor/list_document/?store_cod=${this.$store.state.storehouse.data?.store_cod}&token=${this.$store.state.user?.data?.token}`
      )

      this.documents = documents
    } catch (error) {
      const errorMessage = error?.response?.data || 'Ошибка загрузки документов'
      this.$toast.error(errorMessage)
      console.log(errorMessage)
    }
  },
}
</script>

<style lang="postcss" scoped>
@import '~@/assets/css/variables.css';

.container {
  max-width: 800px;
  margin: 0 auto;
}

.title {
  text-align: center;
  color: #4a4a4a;
  font-weight: 500;
}

.list {
  &__data {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  &__empty {
    text-align: center;
    margin: 20px;
  }
}
</style>
