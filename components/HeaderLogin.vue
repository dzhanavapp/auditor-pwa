<template>
  <header>
    <h4 class="title m-0">{{ title }}</h4>
  </header>
</template>

<script>
export default {
  name: 'HeaderLogin',
  props: {
    title: {
      type: String,
      default: 'Заголовок',
    },
  },
}
</script>

<style lang="postcss" scoped>
@import '~@/assets/css/variables.css';

.title {
  text-align: center;
  font-weight: 400;
  font-size: 18px;
  color: var(--color-gray);
}
</style>
