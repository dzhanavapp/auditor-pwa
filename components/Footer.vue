<template>
  <footer class="footer">
    <span class="footer__text">Служба поддержки</span>
    <a class="footer__tel mt-2" href="tel:+79288339911">8 928 833 99 11</a>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="postcss" scoped>
@import '~@/assets/css/variables.css';

.footer {
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;

  &__text {
    color: var(--color-gray);
  }

  &__tel {
    text-decoration: none;
    font-weight: 500;
    color: var(--color-darkness);

    &::before {
      content: '';
      position: absolute;

      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }
}
</style>
