<template>
  <div class="container">
    <div class="title">{{ storehouseName }}</div>
    <div class="controls">
      <Button
        primary
        block
        class="mb-8"
        to="/create-list"
        @click="createDocument"
      >
        Инвентаризация
      </Button>
      <Button block class="mb-8" to="/documents">Документы</Button>
      <!-- <Button block>Выставить штраф</Button> -->

      <Button class="mt-16 mb-8" block @click="changeStore"
        >Сменить магазин</Button
      >
      <Button block @click="logout">Выйти</Button>
    </div>
  </div>
</template>

<script>
import { SET_USER, SET_STORE } from '~/store/types'
export default {
  name: 'Home',
  validate({ store, redirect }) {
    if (!store.state.storehouse.data) redirect('/store-select')

    return true
  },
  computed: {
    storehouseName() {
      return this.$store.state.storehouse.data?.name || 'Магазин без имени'
    },
  },
  methods: {
    async createDocument() {
      try {
        const res = await this.$axios.$get(
          'https://azs.21baza.ru/mobi/revision/add_document/?storeId=' +
            this.$store.state.data?.id
        )

        this.documentId = res.documentId
        this.documentCreated = true
      } catch (error) {
        const errorMessage = error?.response?.data || 'Создания документа'
        alert(errorMessage)
      }
    },
    logout() {
      this.$store.commit(`user/${SET_USER}`, null)
      this.$store.commit(`storehouse/${SET_STORE}`, null)
      this.$router.push('/login')
    },
    changeStore() {
      this.$store.commit(`storehouse/${SET_STORE}`, null)
      this.$router.push('/store-select')
    },
  },
}
</script>

<style lang="postcss" scoped>
@import '~@/assets/css/variables.css';

.title {
  color: var(--color-darkness);
  text-align: center;
  margin: 12px auto;
  max-width: 300px;
  font-size: 24px;
}
.controls {
  margin: 42px auto 0;
  width: calc(100% - 64px);
  max-width: 512px;
}

.auth-info {
  position: fixed;
  bottom: 0;
}
</style>
