<template>
  <form class="reader" @submit.prevent="handleSendCode">
    <input
      ref="input"
      v-model="code"
      autofocus
      :disabled="modal"
      class="reader__input"
      placeholder="Ввод штрих-кода"
      type="text"
      @blur="handleBlur"
    />
    <button
      type="button"
      class="reader__button"
      @click=";(modal = true), (code = null)"
    >
      <div class="reader__button_icon"></div>
    </button>

    <ModalQr v-if="modal" @close="handleModal" />
  </form>
</template>

<script>
export default {
  name: 'CodeReader',
  data: () => ({
    modal: false,
    code: null,
  }),
  watch: {
    modal(v) {
      if (!v) {
        this.$nextTick(() => {
          this.focusInput()
        })
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.focusInput()
      }, 100)
    })
  },
  methods: {
    handleBlur() {
      this.focusInput()
    },
    focusInput() {
      this.$refs.input?.focus()
    },
    handleSendCode() {
      this.$emit('code', this.code)
      this.code = null
    },
    handleModal(code) {
      this.modal = false
      if (code) {
        this.$emit('code', code)
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
@import '~@/assets/css/variables.css';
.reader {
  display: flex;
  position: relative;

  &__input {
    width: 100%;
    flex: 1;
    margin: 0;
    border: none;
    padding: 0;
    border: 2px solid #e8e8e8;
    border-radius: 12px;
    font-size: 16px;
    color: #4a4a4a;
    padding: 14px 125px 14px 22px;
    outline-offset: 2px;

    outline: none;

    &:focus {
      border: 2px solid var(--color-primary);
    }
  }

  &__button {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: 0;
    border: none;
    padding: 0;
    width: 120px;
    background-color: var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    &_icon {
      width: 24px;
      height: 24px;
      background-image: svg-load('./camera.svg', fill=#fff);
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
}
</style>
