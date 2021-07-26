<template>
  <li class="order">
    <div class="order__info">№{{ order.id }} – {{ order.user }}</div>
    <div class="order__price">{{ order.totalPrice }} ₽</div>
  </li>
</template>

<script>
export default {
  name: 'OrderItem',
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.order {
  display: flex;
  border-radius: 12px;
  background-color: #f0f0f0;
  border: 2px solid #e8e8e8;
  cursor: pointer;

  &__info {
    padding: 12px 18px;
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 19px;
    overflow: hidden;
  }

  &__price {
    padding: 12px 18px;
    margin-left: auto;
    width: 140px;
    min-width: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e8e8e8;
    font-weight: 600;
    font-size: 24px;
  }
}
</style>
