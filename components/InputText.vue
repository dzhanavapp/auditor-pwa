<template>
  <input
    class="input"
    :value="value"
    :placeholder="placeholder"
    :type="type"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'InputText',
  props: {
    value: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: 'Введите текст',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
}
</script>

<style lang="postcss" scoped>
@import '~@/assets/css/variables.css';

.input {
  -webkit-appearance: none;
  display: block;
  width: 100%;
  border: 2px solid #e8e8e8;
  border-radius: 12px;
  color: var(--color-darkness);
  padding: 18px;
  box-sizing: border-box;
  font-size: 16px;
  background-color: var(--color-gray-light);
}
</style>
