<template>
  <div class="login_container">
    <HeaderLogin title="Ревизор" class="mt-2" />
    <main class="login_main">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'LayoutLogin',
  middleware: ['guest'],
}
</script>

<style lang="postcss">
html,
body,
#__nuxt,
#__layout,
.login_container {
  height: 100%;
}

.login_container {
  padding: 16px 6px 34px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  & .login_main {
    flex: 1;
    padding: 12px 0;
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
