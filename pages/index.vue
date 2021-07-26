<template>
  <div class="container">
    <div class="title">БигБазар Огни ул.Калинина 1 кор 2 (Черемушки)</div>
    <div class="controls">
      <Button primary block class="mb-8" to="/create-list">
        Инвентаризация
      </Button>
      <Button block class="mb-8" to="/delivery">Документы</Button>
      <!-- <Button block>Выставить штраф</Button> -->

      <Button class="mt-16" block @click="logout">Сменить магазин</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    logout() {
      this.$store.commit('user/SET_USER', null)
      this.$router.push('/login')
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
