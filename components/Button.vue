<template>
  <button :class="['button', { primary }, { block }]" @click="handleClick">
    <slot>Кнопка</slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    primary: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: null,
    },
  },
  methods: {
    handleClick() {
      this.to ? this.$router.push(this.to) : this.$emit('click')
    },
  },
}
</script>

<style lang="postcss" scoped>
@import '~@/assets/css/variables.css';

.button {
  background-color: var(--color-gray-light);
  border: 2px solid #e8e8e8;
  border-radius: 12px;
  color: var(--color-darkness);
  font-weight: 500;
  font-size: 16px;
  padding: 18px;

  &.block {
    display: block;
    width: 100%;
  }

  &.primary {
    background-color: var(--color-primary);
    color: white;
  }
}
</style>
