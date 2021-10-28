<template>
  <div class="modal">
    <DynamicCodeReader @decode="onDecode" />
    <!-- <StreamBarcodeReader @decode="onDecode"></StreamBarcodeReader> -->
    <div class="modal__button">
      <Button block primary @click="$emit('close')"> Закрыть </Button>
    </div>
  </div>
</template>

<script>
// import { StreamBarcodeReader } from 'vue-barcode-reader'

export default {
  name: 'ModalQr',
  // components: { StreamBarcodeReader },
  mounted() {
    const el = document.querySelector('*:focus')
    el?.blur()
  },
  methods: {
    onDecode(code) {
      console.log(code)
      this.$emit('close', code)
    },
  },
}
</script>

<style lang="postcss" scoped>
.modal {
  top: 0;
  left: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #eaeaea;
  &__button {
    position: absolute;
    bottom: 28px;
    width: 100%;
    padding: 0 6px;
    box-sizing: border-box;
  }

  & video {
    width: 100%;
  }
}
</style>
