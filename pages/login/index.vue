<template>
  <div class="wrapper">
    <div class="logo mb-8" />
    <form class="form" @submit.prevent="handleLogin">
      <InputText v-model="form.login" placeholder="Логин:" class="mb-6" />
      <InputText
        v-model="form.password"
        placeholder="Пароль:"
        type="password"
        class="mb-6"
      />
      <Button block primary>Войти</Button>
    </form>
  </div>
</template>

<script>
import { LOGIN_USER } from '~/store/types'

export default {
  name: 'Login',
  layout: 'login',
  data: () => ({
    form: {},
  }),
  methods: {
    async handleLogin() {
      await this.$store.dispatch(`user/${LOGIN_USER}`, this.form)
      this.form = {}
      this.$router.push('/')
    },
  },
}
</script>

<style lang="postcss" scoped>
.wrapper {
  width: calc(100% - 64px);
  max-width: 512px;
}
.logo {
  height: 42px;

  background-image: svg-load('./logo.svg', fill=#009966);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
