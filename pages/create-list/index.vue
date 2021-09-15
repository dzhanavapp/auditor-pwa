<template>
  <div class="container">
    <h2 class="title">Список</h2>
    <AuditCodeReader class="mb-4" @code="handleCode" />
    <div v-if="list" class="list">
      <ul v-if="list.length" class="list__data">
        <AuditItem
          v-for="(product, index) of list"
          :key="index"
          class="mb-8"
          :audit="product"
        />
      </ul>
      <div v-else class="list__empty">Товары не добавлены</div>
    </div>
    <div v-else class="list__empty">Загрузка...</div>
    <Button block primary @click="closeAudit"> Завершить инвентаризацию</Button>
  </div>
</template>

<script>
export default {
  name: 'CreateList',
  data: () => ({
    list: null,
  }),
  async created() {
    try {
      const res = await this.$axios.$get(
        `https://azs.21baza.ru/api/mob_auditor/add_document/?store_cod=${this.$store.state.storehouse.data?.store_cod}&token=${this.$store.state.user?.data?.token}`
      )

      this.list = res
    } catch (error) {
      const errorMessage = error?.response?.data || 'Создания документа'
      this.$toast.error(errorMessage)
      console.log(errorMessage)
    }

    // this.list = [
    //   {
    //     name: 'Собрание черное Black 188МРЦ',
    //     real: 12,
    //     now: 23,
    //     id: 1,
    //   },
    //   {
    //     name: 'Собрание черное Black 188МРЦ',
    //     real: 18,
    //     now: 17,
    //     id: 2,
    //   },
    //   {
    //     name: 'Собрание черное Black 188МРЦ',
    //     real: 18,
    //     now: 18,
    //     id: 3,
    //   },
    // ]
  },
  methods: {
    async closeAudit() {
      try {
        await this.$axios.$get(
          `https://azs.21baza.ru/api/mob_auditor/close_document/?store_cod=${this.$store.state.storehouse.data?.store_cod}&token=${this.$store.state.user?.data?.token}`
        )

        this.$router.push('/')
      } catch (error) {
        const errorMessage =
          error?.response?.data || 'Ошибка закрытия. Попробуйте позже'
        this.$toast.error(errorMessage)
        console.log(errorMessage)
      }
      // Запрос на завершение аудита
      console.log('Аудит завершён')
    },
    async handleCode(code) {
      try {
        const amount = prompt('Введите фактическое количество товара:')

        if (!amount) return

        const product = await this.$axios.$get(
          `https://azs.21baza.ru/api/mob_auditor/add_document/items/?store_cod=${
            this.$store.state.storehouse.data?.store_cod
          }&token=${
            this.$store.state.user?.data?.token
          }&code=${code}&amount=${parseInt(amount)}`
        )

        // Делаем запрос получаем товар
        console.log(code)
        console.log(product, ' res')

        console.log(amount)
        // this.$emit('divergence', {
        //   now: nowProductCount,
        //   real: realProductCount,
        //   code,
        //   name: 'Пока имя любое',
        // })

        this.list.unshift(product)
      } catch (error) {
        const errorMessage = error?.response?.data || 'Ошибка полдучения товара'
        this.$toast.error(errorMessage)
        console.log(errorMessage)
      }
    },
    async sendProductAmount(amount) {
      try {
        const res = await this.$axios.$get(
          `https://azs.21baza.ru/mobi/revision/add_document/items/?documentId=${this.documentId}&qr=${this.productId}&amount=${amount}`
        )

        this.products = res
      } catch (error) {
        const errorMessage = error?.response?.data || 'Ошибка отправки продукта'
        this.$toast.error(errorMessage)
        console.log(errorMessage)
      } finally {
        this.productId = null
        this.scannerEnabled = this.enterAmount = false
      }
    },
    async closeRevision() {
      try {
        await this.$axios.$get(
          'https://azs.21baza.ru/api/mobi/revision/close_document/?documentId=' +
            this.documentId
        )
        window.location.reload()
      } catch (error) {
        const errorMessage =
          error?.response?.data || 'Ошибка закрытия документа'
        this.$toast.error(errorMessage)
        console.log(error)
      }
      console.log('Завершить')
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
    margin: 50px 0 0;
    padding: 0;
  }

  &__item {
  }

  &__empty {
    text-align: center;
    margin: 20px;
  }
}
</style>
