<template>
  <div class="container">
    <h2 class="title">Заказы онлайн</h2>
    <div class="list">
      <!-- <ul v-if="list.length" class="list__data">
        <OrderItem
          v-for="order of list"
          :key="order.id"
          class="mb-8"
          :order="order"
        />
      </ul>
      <div v-else class="list__empty">Товары не добавлены</div> -->
      <div class="list__empty">Раздел находится в разработке</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeliveryList',
  data: () => ({
    list: [
      { id: 12, user: 'Магомед', totalPrice: 2000 },
      { id: 13, user: 'Расул', totalPrice: 1200 },
    ],
  }),
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
