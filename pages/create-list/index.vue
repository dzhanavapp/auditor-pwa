<template>
  <div class="container">
    <h2 class="title">Список</h2>
    <CodeReader class="mb-4" @code="handleCode" />
    <div v-if="list" class="list">
      <ul v-if="list.length" class="list__data">
        <li v-for="(product, index) of list" :key="product" class="list__item">
          {{ list.length - index }} – {{ product.name }}
        </li>
      </ul>
      <div v-else class="list__empty">Товары не добавлены</div>
    </div>
    <div v-else class="list__empty">Загрузка...</div>
    <Button block primary @click="closeList"> Закрыть список </Button>
  </div>
</template>

<script>
export default {
  name: 'CreateList',
  data: () => ({
    list: null,
  }),
  async created() {
    const list = await this.$axios.$get(
      `/api/mob_lists/?token=${this.$store.state.user.data?.token}`
    )

    this.list = list.reverse()
  },
  methods: {
    async handleCode(code) {
      try {
        const product = await this.$axios.$get(
          `/api/mob_lists/id/?id=${code}&token=${this.$store.state.user.data?.token}`
        )
        this.list?.unshift(product)
      } catch (error) {
        const errorMessage = error?.response?.data || 'Ошибка получения товара'
        this.$toast.error(errorMessage)
        console.log(errorMessage)
      }
    },

    async closeList() {
      try {
        await this.$axios.$get(
          `/api/mob_lists/close/?token=${this.$store.state.user.data?.token}`
        )

        this.$router.push('/')
      } catch (error) {
        const errorMessage =
          error?.response?.data || 'Ошибка закрытия списка, попробуйте позже'
        this.$toast.error(errorMessage)
        console.log(errorMessage)
      }
    },
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
  padding-bottom: 42px;
  &__data {
    display: flex;
    flex-direction: column;
    gap: 8px;
    list-style: none;
    margin: 0;
    padding: 8px;
    border-radius: 12px;
    border: 2px solid var(--color-gray);
    background-color: var(--color-gray-light);
  }

  &__item {
  }

  &__empty {
    text-align: center;
    margin: 20px;
  }
}
</style>
