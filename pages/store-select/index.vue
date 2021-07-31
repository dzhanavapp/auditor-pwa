<template>
  <div class="modal">
    <StreamBarcodeReader @decode="onDecode"></StreamBarcodeReader>
    <h2 class="modal__text">Отсканируйте код магазина</h2>
  </div>
</template>

<script>
import { StreamBarcodeReader } from 'vue-barcode-reader'
import debounce from 'lodash.debounce'
import { SET_STORE } from '~/store/types'

export default {
  name: 'StoreSelect',
  components: { StreamBarcodeReader },
  validate({ store, redirect }) {
    if (store.state.storehouse.data) redirect('/')

    return true
  },
  created() {
    this.onDecode = debounce(this.onDecode, 400)
  },
  methods: {
    async onDecode(code) {
      try {
        const store = await this.$axios.$get(
          `/api/mob_auditor/store_selection/?store_cod=${code}&token=${this.$store.state.user?.data?.token}`
        )
        this.$store.commit(`storehouse/${SET_STORE}`, store)
        this.$router.push('/')
        console.log(store, 'USER')
      } catch (error) {
        const errorMessage = error?.response?.data || 'Ошибка авторизации'
        this.$toast.error(errorMessage)
        console.log('Ошибка авторизации')
      }
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

  &__text {
    text-align: center;
    background: white;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
    padding: 20px;
  }
}
</style>
