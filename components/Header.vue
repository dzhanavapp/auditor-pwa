<template>
  <header class="header">
    <nuxt-link tag="div" class="header__logo" to="/" />
    <div class="header__name">{{ name }}</div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    name() {
      return this.$store.state.user.data?.name || 'Ревизор'
    },
  },
}
</script>

<style lang="postcss" scoped>
@import '~@/assets/css/variables.css';
.header {
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 42px;
  height: 42px;

  &__logo {
    height: 100%;
    width: 170px;
    cursor: pointer;

    background-image: svg-load('./logo.svg', fill=#009966);
    background-position: left;
    background-repeat: no-repeat;
    background-size: contain;
  }

  &__name {
    padding-left: 20px;
    color: #4a4a4a;
    font-size: 18px;
  }
}
</style>
