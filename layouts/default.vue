<template>
  <div class="default_container">
    <Header />
    <main class="default_main">
      <nuxt />
    </main>
  </div>
</template>
<script>
export default {
  name: 'LayoutDefault',
  middleware: ['auth'],
}
</script>

<style lang="postcss" scoped>
.default {
  &_container {
    padding: 0 6px;
  }
}
</style>
